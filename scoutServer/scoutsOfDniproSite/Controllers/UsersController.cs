using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using scoutsOfDniproSite;
using scoutsOfDniproSite.Globals;
using scoutsOfDniproSite.Models;

namespace scoutsOfDniproSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly ApplicationDbContext db;

        private int UserId => int.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);

        public UsersController(ApplicationDbContext context)
        {
            db = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            if (!db.users.Any())
                return NotFound();
            return await db.users.ToArrayAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(long id)
        {
            var user = await db.users.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return NotFound();
            return user;
        }           
        // GET: api/Users/5
        [HttpGet("/api/Users/ByTelegramId/{id}")]
        public async Task<ActionResult<User>> GetUserByTelegramId(string id)
        {
            var user = await db.users.FirstOrDefaultAsync(x => x.TelegramId == id);
            if (user == null)
                return NotFound();
            return user;
        }        
        
        [HttpGet("/api/Users/ByToken")]
        [Authorize]
        public async Task<ActionResult<User>> GetUserByToken()
        {
            var id = UserId;
            var user = await db.users.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return NotFound();
            user.LastSignIn = DateTime.Now.ToString();
            await PutUser(user.Id, user);
            return user;
        }

        // PUT: api/Users/Update/5
        [HttpPut("/api/Users/Update/{id}")]
        public async Task<ActionResult<User>> PutUser(long id, [FromBody]User user)
        {
            db.Entry(user).State = EntityState.Modified;
            await db.SaveChangesAsync();
            var _user = await db.users.FirstOrDefaultAsync(x => x.Id == id);
            return _user;
        }

        // POST: api/Users
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("/api/Users/Register")]
        public async Task<ActionResult<requestUser>> Register([FromBody]requestUser user)
        {
            var _user = await db.users.FirstOrDefaultAsync(x => x.UserName == user.UserName);
            var __user = await db.usersrequests.FirstOrDefaultAsync(x => x.UserName == user.UserName);
            if (_user != null || __user != null)
                return BadRequest(new { errorText = "Такой аккаунт уже есть, либо вы уже подали заявку." });
            SHA256 hash = SHA256.Create();
            user.Password = string.Concat(hash.ComputeHash(Encoding.UTF8.GetBytes(user.Password)).Select(x => x.ToString("X2")));
            await db.usersrequests.AddAsync(user);
            await db.SaveChangesAsync();
            return user;
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(long id)
        {
            var user = await db.users.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return NotFound();
            db.users.Remove(user);
            await db.SaveChangesAsync();
            return user;
        }        // DELETE: api/Users/5
        [HttpGet("/api/Users/Reject/{id}")]
        public async Task<ActionResult<requestUser>> DeleteRequestUser(int id)
        {
            var user = await db.usersrequests.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return NotFound();
            db.usersrequests.Remove(user);
            await db.SaveChangesAsync();
            return user;
        }

        [HttpGet("/api/Users/AcceptRegister/{id}")]
        public async Task<ActionResult<User>> AcceptRegister(int id)
        {
            var user = await db.usersrequests.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
                return BadRequest(new { errorText = "Такой заявки нет."});

            var _user = await db.users.FirstOrDefaultAsync(x => x.UserName == user.UserName);
            var __user = await db.usersrequests.FirstOrDefaultAsync(x => x.UserName == user.UserName);
            if (_user != null || __user == null)
                return BadRequest(new { errorText = "Такой аккаунт уже есть, либо этот аккаунт не подавал заявку на регистрацию."});
            db.usersrequests.Remove(__user);
            var newUser = new User()
            {
                FirstName = __user.FirstName,
                UserName = __user.UserName,
                LastName = __user.LastName,
                ForestName = __user.ForestName,
                Password = __user.Password,
                SiteRoleId = 1
            };
            await db.users.AddAsync(newUser);
            await db.SaveChangesAsync();
            var _newUser = await db.users.FirstOrDefaultAsync(x => x.UserName == newUser.UserName);
            var scoutMinimum = new userScoutMinimum();
            scoutMinimum.UserId = Int32.Parse(_newUser.Id.ToString());
            await db.userscoutminimums.AddAsync(scoutMinimum);
            await db.SaveChangesAsync();
            return _newUser;
        }

        [HttpGet("/api/Users/usersrequests")]
        public async Task<ActionResult<IEnumerable<requestUser>>> GetRequests()
        {
            //if (!db.usersrequests.Any())
                //return NotFound();
            return await db.usersrequests.ToArrayAsync();
        }

        [HttpPost("/api/Users/Auth")]
        public async Task<ActionResult> Auth([FromBody]LoginForm _user)
        {
            var hash = SHA256.Create();
            var user = await db.users.FirstOrDefaultAsync(x => x.UserName == _user.Email && x.Password == string.Concat(hash.ComputeHash(Encoding.UTF8.GetBytes(_user.Password)).Select(x => x.ToString("X2"))));
            if (user == null)
                return NotFound();
            user.LastSignIn = DateTime.Now.ToString();
            user.JWTToken = GenerateJWTToken(user);
            await PutUser(user.Id, user);
            return Ok(new { acces_token = user.JWTToken });
        }        
        [HttpPost("/api/Users/UpdateToken")]
        public async Task<ActionResult> Auth([FromBody]UpdateTokenForm form)
        {
            var user = await db.users.FirstOrDefaultAsync(x => x.JWTToken == form.Token);
            if (user == null)
                return NotFound();
            user.LastSignIn = DateTime.Now.ToString();
            user.JWTToken = GenerateJWTToken(user);
            await PutUser(user.Id, user);
            return Ok(new { acces_token = user.JWTToken });
        }
        private string GenerateJWTToken(User user)
        {
            var securityKey = authJwtOptions.SecretKey;
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Email, user.UserName),
                new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Sub, user.Id.ToString())
            };
            claims.Add(new Claim("role", user.SiteRoleId.ToString()));

            var token = new JwtSecurityToken(authJwtOptions.Issuer, authJwtOptions.Audience, claims, expires: DateTime.Now.AddSeconds(3600), signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
