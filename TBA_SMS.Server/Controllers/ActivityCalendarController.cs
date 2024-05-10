using Microsoft.AspNetCore.Mvc;
using TBA_SMS.core.DTO;
using TBA_SMS.core.Interface;

namespace TBA_SMS.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityCalendarController : ControllerBase
    {
        private readonly IActivityCalendarService _activityCalendarService;

        public ActivityCalendarController(IActivityCalendarService activityCalendarService)
        {
            _activityCalendarService = activityCalendarService;
        }

        [HttpPost]
        public async Task<IActionResult> AddActivityCalendar([FromBody] ActivityCalendarDto activityCalendar)
        {
            try
            {

                if (activityCalendar == null)
                {
                    return BadRequest("Activity calendar data is required.");
                }

                await _activityCalendarService.AddActivityCalendar(activityCalendar);
                return CreatedAtAction(nameof(GetActivityCalendarById), new { id = activityCalendar.ActivityCalendarId }, activityCalendar);
            }
            catch (Exception)
            {

                throw;
            }
        }


        [HttpGet]
        public ActionResult<IEnumerable<ActivityCalendarDto>> GetActivityCalendars()
        {
            var activities = _activityCalendarService.GetActivityCalendar();

            if (activities == null)
            {
                return NotFound();
            }

            var result = new List<ActivityCalendarDto>();

            foreach (var activitiy in activities)
            {
                result.Add(new ActivityCalendarDto
                {
                    ActivityCalendarId = activitiy.ActivityCalendarId,
                    Title = activitiy.Title,
                    Description = activitiy.Description,
                    Date = activitiy.Date,
                    CreatedDate = activitiy.CreatedDate,
                    CreatedBy = activitiy.CreatedBy,
                    UpdatedDate = activitiy.UpdatedDate,
                    UpdatedBy = activitiy.UpdatedBy,
                    IsActive = activitiy.IsActive
                });
            }

            return Ok(result);
        }

        [HttpGet("{id}")]
        public ActionResult<ActivityCalendarDto> GetActivityCalendarById(int id)
        {
            var activityCalendars = _activityCalendarService.GetActivityCalendar();
            var calendar = activityCalendars.FirstOrDefault(ac => ac.ActivityCalendarId == id);

            if (calendar == null)
            {
                return NotFound();
            }

            return Ok(calendar);
        }


        [HttpGet("{year}/{month}")]
        public ActionResult<IEnumerable<ActivityCalendarDto>> GetActivityCalendarsByMonth(int year, int month)
        {
            var activityCalendars = _activityCalendarService.GetActivityCalendarByMonth(year, month);
            return Ok(activityCalendars);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateActivityCalendar(int id, [FromBody] ActivityCalendarDto activityCalendar)
        {
            if (activityCalendar == null || activityCalendar.ActivityCalendarId != id)
            {
                return BadRequest("Invalid activity calendar data.");
            }

            try
            {
                _activityCalendarService.UpdateActivityCalendar(activityCalendar);
                return NoContent();
            }
            catch (InvalidOperationException)
            {
                return NotFound($"Activity calendar with ID {id} not found.");
            }
        }

        [HttpPatch("{id}/details")]
        public IActionResult UpdateActivityCalendarDetails(int id, [FromBody] dynamic updateData)
        {
            if (updateData == null)
            {
                return BadRequest("Update data is required.");
            }

            string title = updateData.title;
            string description = updateData.description;

            try
            {
                _activityCalendarService.UpdateActivityCalendarDetails(id, title, description);
                return NoContent();
            }
            catch (InvalidOperationException)
            {
                return NotFound($"Activity calendar with ID {id} not found.");
            }
        }
    }
}
