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
    public class docslevelsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public docslevelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/docslevels
        [HttpGet("/api/docslevels")]
        public async Task<ActionResult<IEnumerable<DocsLevel>>> Getdocslevels()
        {
            return await _context.docslevels.ToListAsync();
        }

        // GET: api/docslevels/5
        [HttpGet("/api/docslevels/{id}")]
        public async Task<ActionResult<DocsLevel>> GetDocsLevel(long id)
        {
            var docsLevel = await _context.docslevels.FindAsync(id);

            if (docsLevel == null)
            {
                return NotFound();
            }

            return docsLevel;
        }

        // PUT: api/docslevels/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("/api/docslevels/Update/{id}")]
        public async Task<IActionResult> PutDocsLevel(long id, DocsLevel docsLevel)
        {
            if (id != docsLevel.Id)
            {
                return BadRequest();
            }

            _context.Entry(docsLevel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocsLevelExists(id))
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

        // POST: api/docslevels
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("/api/docslevels/Create")]
        public async Task<ActionResult<DocsLevel>> PostDocsLevel(DocsLevel docsLevel)
        {
            _context.docslevels.Add(docsLevel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocsLevel", new { id = docsLevel.Id }, docsLevel);
        }

        // DELETE: api/docslevels/5
        [HttpDelete("/api/docslevels/Delete/{id}")]
        public async Task<ActionResult<DocsLevel>> DeleteDocsLevel(long id)
        {
            var docsLevel = await _context.docslevels.FindAsync(id);
            if (docsLevel == null)
            {
                return NotFound();
            }

            _context.docslevels.Remove(docsLevel);
            await _context.SaveChangesAsync();

            return docsLevel;
        }

        private bool DocsLevelExists(long id)
        {
            return _context.docslevels.Any(e => e.Id == id);
        }
    }
}
