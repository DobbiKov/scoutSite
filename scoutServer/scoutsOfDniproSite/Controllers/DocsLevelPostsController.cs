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
    public class docslevelpostsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public docslevelpostsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/docslevelposts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<docslevelpost>>> Getdocslevelposts()
        {
            return await _context.docslevelposts.ToListAsync();
        }

        // GET: api/docslevelposts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<docslevelpost>> Getdocslevelpost(long id)
        {
            var docslevelpost = await _context.docslevelposts.FindAsync(id);

            if (docslevelpost == null)
            {
                return NotFound();
            }

            return docslevelpost;
        }        
        
        // GET: api/docslevelposts/5
        [HttpGet("/api/docslevelposts/ByDocsLevel/{id}")]
        public async Task<ActionResult<IEnumerable<docslevelpost>>> GetdocslevelpostByDocsLevel(long id)
        {
            var docsLevel = await _context.docslevels.FindAsync(id);

            if (docsLevel == null)
            {
                return NotFound();
            }

            var newPosts = new List<docslevelpost>();
            foreach(var i in _context.docslevelposts)
            {
                if (i.DocsLevelId == id)
                    newPosts.Add(i);
            } 

            return newPosts;
        }

        // PUT: api/docslevelposts/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("/api/docslevelposts/Update/{id}")]
        public async Task<IActionResult> Putdocslevelpost(long id, docslevelpost docslevelpost)
        {
            if (id != docslevelpost.Id)
            {
                return BadRequest();
            }

            _context.Entry(docslevelpost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!docslevelpostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/docslevelposts
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("/api/docslevelposts/Create")]
        public async Task<ActionResult<docslevelpost>> Postdocslevelpost(docslevelpost docslevelpost)
        {
            _context.docslevelposts.Add(docslevelpost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getdocslevelpost", new { id = docslevelpost.Id }, docslevelpost);
        }

        // DELETE: api/docslevelposts/5
        [HttpDelete("/api/docslevelposts/Delete/{id}")]
        public async Task<ActionResult<docslevelpost>> Deletedocslevelpost(long id)
        {
            var docslevelpost = await _context.docslevelposts.FindAsync(id);
            if (docslevelpost == null)
            {
                return NotFound();
            }

            _context.docslevelposts.Remove(docslevelpost);
            await _context.SaveChangesAsync();

            return docslevelpost;
        }

        private bool docslevelpostExists(long id)
        {
            return _context.docslevelposts.Any(e => e.Id == id);
        }
    }
}
