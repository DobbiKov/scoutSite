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
    public class EventsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EventsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Events
        [HttpGet("/api/Events")]
        public async Task<ActionResult<IEnumerable<Events>>> GetEvents()
        {
            return await _context.events.ToListAsync();
        }        
        // GET: api/Events
        [HttpGet("/api/NowEvents")]
        public async Task<ActionResult<IEnumerable<Events>>> GetNowEvents()
        {
            var events = await _context.events.ToListAsync();
            foreach(var e in events.ToList())
            {
                if(DateTime.Parse(e.Date) < DateTime.Now)
                {
                    events.Remove(e);
                }
            }
            return events;
        }        
        // GET: api/Events
        [HttpGet("/api/LastEvents")]
        public async Task<ActionResult<IEnumerable<Events>>> GetLastEvents()
        {
            var events = await _context.events.ToListAsync();
            foreach(var e in events.ToList())
            {
                if(DateTime.Parse(e.Date) > DateTime.Now)
                {
                    events.Remove(e);
                }
            }
            return events;
        }

        // GET: api/Events/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Events>> GetEvents(long id)
        {
            var events = await _context.events.FindAsync(id);

            if (events == null)
            {
                return NotFound();
            }

            return events;
        }

        // PUT: api/Events/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("/api/Events/Update/{id}")]
        public async Task<IActionResult> PutEvents(long id, Events events)
        {
            if (id != events.Id)
            {
                return BadRequest();
            }

            _context.Entry(events).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventsExists(id))
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

        // POST: api/Events
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("/api/Events/Create")]
        public async Task<ActionResult<Events>> PostEvents(Events events)
        {
            _context.events.Add(events);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEvents", new { id = events.Id }, events);
        }

        // DELETE: api/Events/5
        [HttpDelete("/api/Events/Delete/{id}")]
        public async Task<ActionResult<Events>> DeleteEvents(long id)
        {
            var events = await _context.events.FindAsync(id);
            if (events == null)
            {
                return NotFound();
            }

            _context.events.Remove(events);
            await _context.SaveChangesAsync();

            return events;
        }

        private bool EventsExists(long id)
        {
            return _context.events.Any(e => e.Id == id);
        }
    }
}
