using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using scoutsOfDniproSite;
using scoutsOfDniproSite.Models;

namespace scoutsOfDniproSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userscoutminimumsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public userscoutminimumsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/userscoutminimums
        [HttpGet]
        public async Task<ActionResult<IEnumerable<userScoutMinimum>>> Getuserscoutminimums()
        {
            return await _context.userscoutminimums.ToListAsync();
        }

        // GET: api/userscoutminimums/5
        [HttpGet("{id}")]
        public async Task<ActionResult<userScoutMinimum>> GetuserScoutMinimum(int id)
        {
            var userScoutMinimum = await _context.userscoutminimums.FindAsync(id);

            if (userScoutMinimum == null)
            {
                return NotFound();
            }

            return userScoutMinimum;
        }        
        [HttpGet("/api/userScoutMininmums/ByUserId/{userId}")]
        public async Task<ActionResult<IEnumerable<Object>>> GetuserscoutminimumsByUserId(int userId)
        {
            var userScoutMinimum = await _context.userscoutminimums.FirstOrDefaultAsync(x => x.UserId == userId);

            if (userScoutMinimum == null)
            {
                return NotFound();
            }
            var minimum = new List<Object>();
            #region minimum
            minimum.Add(new { Value = userScoutMinimum.iScout1 });
            minimum.Add(new { Value = userScoutMinimum.iScout2 });
            minimum.Add(new { Value = userScoutMinimum.iScout3 });
            minimum.Add(new { Value = userScoutMinimum.iScout4 });
            minimum.Add(new { Value = userScoutMinimum.iScout5 });
            minimum.Add(new { Value = userScoutMinimum.iScout6 });
            minimum.Add(new { Value = userScoutMinimum.iScout7 });
            minimum.Add(new { Value = userScoutMinimum.iScout8 });
            minimum.Add(new { Value = userScoutMinimum.iScout9 });
            minimum.Add(new { Value = userScoutMinimum.iScout10 });
            minimum.Add(new { Value = userScoutMinimum.iScout11 });
            minimum.Add(new { Value = userScoutMinimum.iScout12 });
            minimum.Add(new { Value = userScoutMinimum.iScout13 });

            minimum.Add(new { Value = userScoutMinimum.natureLife1 });
            minimum.Add(new { Value = userScoutMinimum.natureLife2 });
            minimum.Add(new { Value = userScoutMinimum.natureLife3 });
            minimum.Add(new { Value = userScoutMinimum.natureLife4 });
            minimum.Add(new { Value = userScoutMinimum.natureLife5 });
            minimum.Add(new { Value = userScoutMinimum.natureLife6 });
            minimum.Add(new { Value = userScoutMinimum.natureLife7 });
            minimum.Add(new { Value = userScoutMinimum.natureLife8 });
            minimum.Add(new { Value = userScoutMinimum.natureLife9 });
            minimum.Add(new { Value = userScoutMinimum.natureLife10 });
            minimum.Add(new { Value = userScoutMinimum.natureLife11 });
            minimum.Add(new { Value = userScoutMinimum.natureLife12 });
            minimum.Add(new { Value = userScoutMinimum.natureLife13 });
            minimum.Add(new { Value = userScoutMinimum.natureLife14 });
            minimum.Add(new { Value = userScoutMinimum.natureLife15 });
            minimum.Add(new { Value = userScoutMinimum.natureLife16 });

            minimum.Add(new { Value = userScoutMinimum.lifeInSociety1 });
            minimum.Add(new { Value = userScoutMinimum.lifeInSociety2 });
            minimum.Add(new { Value = userScoutMinimum.lifeInSociety3 });
            minimum.Add(new { Value = userScoutMinimum.lifeInSociety4 });
            minimum.Add(new { Value = userScoutMinimum.lifeInSociety5 });
            minimum.Add(new { Value = userScoutMinimum.lifeInSociety6 });
            minimum.Add(new { Value = userScoutMinimum.lifeInSociety7 });
            minimum.Add(new { Value = userScoutMinimum.lifeInSociety8 });

            minimum.Add(new { Value = userScoutMinimum.iGood1 });
            minimum.Add(new { Value = userScoutMinimum.iGood2 });
            minimum.Add(new { Value = userScoutMinimum.iGood3 });
            minimum.Add(new { Value = userScoutMinimum.iGood4 });
            minimum.Add(new { Value = userScoutMinimum.iGood5 });
            minimum.Add(new { Value = userScoutMinimum.iGood6 });
            minimum.Add(new { Value = userScoutMinimum.iGood7 });
            minimum.Add(new { Value = userScoutMinimum.iGood8 });
            minimum.Add(new { Value = userScoutMinimum.iGood9 });
            #endregion

            return minimum;
        }       
/*        [HttpGet("/api/userScoutMininmum/ByUserId/{userId}")]
        public async Task<ActionResult<userScoutMinimum>> GetuserScoutMinimumByUserId(int userId)
        {
            var userScoutMinimum = await _context.userscoutminimums.FirstOrDefaultAsync(x => x.UserId == userId);

            if (userScoutMinimum == null)
            {
                return NotFound();
            }

            var mininmum = new bool[]
            {
                userScoutMinimum.iScout1,
                userScoutMinimum.iScout2,
                userScoutMinimum.iScout3,
                userScoutMinimum.iScout4,
                userScoutMinimum.iScout5,
                userScoutMinimum.iScout6,
                userScoutMinimum.iScout7,
                userScoutMinimum.iScout8,
                userScoutMinimum.iScout9,
                userScoutMinimum.iScout10,
                userScoutMinimum.iScout11,
                userScoutMinimum.iScout12,
                userScoutMinimum.iScout13,

                userScoutMinimum.natureLife1,
                userScoutMinimum.natureLife2,
                userScoutMinimum.natureLife3,
                userScoutMinimum.natureLife4,
                userScoutMinimum.natureLife5,
                userScoutMinimum.natureLife6,
                userScoutMinimum.natureLife7,
                userScoutMinimum.natureLife8,
                userScoutMinimum.natureLife9,
                userScoutMinimum.natureLife10,
                userScoutMinimum.natureLife11,
                userScoutMinimum.natureLife12,
                userScoutMinimum.natureLife13,
                userScoutMinimum.natureLife14,
                userScoutMinimum.natureLife15,
                userScoutMinimum.natureLife16,

                userScoutMinimum.lifeInSociety1,
                userScoutMinimum.lifeInSociety2,
                userScoutMinimum.lifeInSociety3,
                userScoutMinimum.lifeInSociety4,
                userScoutMinimum.lifeInSociety5,
                userScoutMinimum.lifeInSociety6,
                userScoutMinimum.lifeInSociety7,
                userScoutMinimum.lifeInSociety8,

                userScoutMinimum.iGood1,
                userScoutMinimum.iGood2,
                userScoutMinimum.iGood3,
                userScoutMinimum.iGood4,
                userScoutMinimum.iGood5,
                userScoutMinimum.iGood6,
                userScoutMinimum.iGood7,
                userScoutMinimum.iGood8,
                userScoutMinimum.iGood9,
            };
            var newMininmum = 1;
            return userScoutMinimum;
        }*/

        // PUT: api/userscoutminimums/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<ActionResult<userScoutMinimum>> PutuserScoutMinimum(int id, [FromBody]ScoutMinimum[] minimum)
        {
            var scoutMinimum = await _context.userscoutminimums.FirstOrDefaultAsync(x => x.UserId == id);
            if (scoutMinimum == null)
                return BadRequest();
            #region minimum
            scoutMinimum.iScout1 = minimum[0].value;
            scoutMinimum.iScout2 = minimum[1].value;
            scoutMinimum.iScout3 = minimum[2].value;
            scoutMinimum.iScout4 = minimum[3].value;
            scoutMinimum.iScout5 = minimum[4].value;
            scoutMinimum.iScout6 = minimum[5].value;
            scoutMinimum.iScout7 = minimum[6].value;
            scoutMinimum.iScout8 = minimum[7].value;
            scoutMinimum.iScout9 = minimum[8].value;
            scoutMinimum.iScout10 = minimum[9].value;
            scoutMinimum.iScout11 = minimum[10].value;
            scoutMinimum.iScout12 = minimum[11].value;
            scoutMinimum.iScout13 = minimum[12].value;

            scoutMinimum.natureLife1 = minimum[13].value;
            scoutMinimum.natureLife2 = minimum[14].value;
            scoutMinimum.natureLife3 = minimum[15].value;
            scoutMinimum.natureLife4 = minimum[16].value;
            scoutMinimum.natureLife5 = minimum[17].value;
            scoutMinimum.natureLife6 = minimum[18].value;
            scoutMinimum.natureLife7 = minimum[19].value;
            scoutMinimum.natureLife8 = minimum[20].value;
            scoutMinimum.natureLife9 = minimum[21].value;
            scoutMinimum.natureLife10 = minimum[22].value;
            scoutMinimum.natureLife11 = minimum[23].value;
            scoutMinimum.natureLife12 = minimum[24].value;
            scoutMinimum.natureLife13 = minimum[25].value;
            scoutMinimum.natureLife14 = minimum[26].value;
            scoutMinimum.natureLife15 = minimum[27].value;
            scoutMinimum.natureLife16 = minimum[28].value;

            scoutMinimum.lifeInSociety1 = minimum[29].value;
            scoutMinimum.lifeInSociety2 = minimum[30].value;
            scoutMinimum.lifeInSociety3 = minimum[31].value;
            scoutMinimum.lifeInSociety4 = minimum[32].value;
            scoutMinimum.lifeInSociety5 = minimum[33].value;
            scoutMinimum.lifeInSociety6 = minimum[34].value;
            scoutMinimum.lifeInSociety7 = minimum[35].value;
            scoutMinimum.lifeInSociety8 = minimum[36].value;

            scoutMinimum.iGood1 = minimum[37].value;
            scoutMinimum.iGood2 = minimum[38].value;
            scoutMinimum.iGood3 = minimum[39].value;
            scoutMinimum.iGood4 = minimum[40].value;
            scoutMinimum.iGood5 = minimum[41].value;
            scoutMinimum.iGood6 = minimum[42].value;
            scoutMinimum.iGood7 = minimum[43].value;
            scoutMinimum.iGood8 = minimum[44].value;
            scoutMinimum.iGood9 = minimum[45].value;
            #endregion
            _context.Entry(scoutMinimum).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            /*            if (id != userScoutMinimum.Id)
                        {
                            return BadRequest();
                        }

                        _context.Entry(userScoutMinimum).State = EntityState.Modified;

                        try
                        {
                            await _context.SaveChangesAsync();
                        }
                        catch (DbUpdateConcurrencyException)
                        {
                            if (!userScoutMinimumExists(id))
                            {
                                return NotFound();
                            }
                            else
                            {
                                throw;
                            }
                        }*/

            return scoutMinimum;
        }

        // POST: api/userscoutminimums
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<userScoutMinimum>> PostuserScoutMinimum(userScoutMinimum userScoutMinimum)
        {
            _context.userscoutminimums.Add(userScoutMinimum);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetuserScoutMinimum", new { id = userScoutMinimum.Id }, userScoutMinimum);
        }

        // DELETE: api/userscoutminimums/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<userScoutMinimum>> DeleteuserScoutMinimum(int id)
        {
            var userScoutMinimum = await _context.userscoutminimums.FindAsync(id);
            if (userScoutMinimum == null)
            {
                return NotFound();
            }

            _context.userscoutminimums.Remove(userScoutMinimum);
            await _context.SaveChangesAsync();

            return userScoutMinimum;
        }

        private bool userScoutMinimumExists(int id)
        {
            return _context.userscoutminimums.Any(e => e.Id == id);
        }
    }
}
