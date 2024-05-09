using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TBA_SMS.core;
using TBA_SMS.core.DTO;
using TBA_SMS.core.Interface;
using TBA_SMS.core.Models;

namespace TBA_SMS.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SponsorController : ControllerBase
    {
        private readonly TbaDbContext _context;
        private readonly ISponsorService _sponsorService;

        public SponsorController(TbaDbContext context, ISponsorService sponsorService)
        {
            _context = context;
            _sponsorService = sponsorService;
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<GetSponsor>>> GetAllSponsors()
        {
            try
            {
                var sponsor = await _sponsorService.GetAllSponsors();
                return Ok(sponsor);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("GetSponsorById")]
        public async Task<ActionResult<GetSponsor>> GetSponsor(int sponsorId)
           {
            try
            {
                var sponsor = _sponsorService.GetSponsorById(sponsorId);
                if (sponsor == null)
                {
                    return NotFound(); // Return HTTP 404 if sponsor is not found
                }
                return Ok(sponsor);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }


        [HttpPut("[action]")]
        public IActionResult UpdateSponsor(int sprId, [FromBody] UpdateSponsor sponsorUpdate)
        {
            try
            {
                _sponsorService.UpdateSponsor(sprId, sponsorUpdate);
                
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
