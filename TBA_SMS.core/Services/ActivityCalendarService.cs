using TBA_SMS.core.DTO;
using TBA_SMS.core.Interface;
using TBA_SMS.core.Models;

namespace TBA_SMS.core.Services
{
    public class ActivityCalendarService : IActivityCalendarService
    {
        private readonly TbaDbContext _context;

        public ActivityCalendarService(TbaDbContext context)
        {
            _context = context;
        }

        public async Task AddActivityCalendar(ActivityCalendarDto activityCalendar)
        {
            var request = new ActivityCalendar()
            {
                Title = activityCalendar.Title,
                Description = activityCalendar.Description,
                Date = activityCalendar.Date,
                CreatedDate = DateTime.Now,
                ClassId = activityCalendar.ClassId
            };

            await _context.ActivityCalendar.AddAsync(request);
            await _context.SaveChangesAsync();
        }

        //public void AddActivityCalendar(ActivityCalendarDto activityCalendar)
        //{


        //}

        public IEnumerable<ActivityCalendarDto> GetActivityCalendar()
        {
            var result = _context.Set<ActivityCalendarDto>();

            return result;
        }

        public IEnumerable<ActivityCalendarDto> GetActivityCalendarByMonth(int year, int month)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ActivityCalendarDto> GetActivityCalendars()
        {

            return _context.Set<ActivityCalendarDto>().ToList();
        }


        public IEnumerable<ActivityCalendarDto> GetActivityCalendarsByMonth(int year, int month)
        {

            return _context.Set<ActivityCalendarDto>()
                .Where(ac => ac.Date.Year == year && ac.Date.Month == month)
                .ToList();
        }


        public void UpdateActivityCalendar(ActivityCalendarDto activityCalendar)
        {

            _context.Set<ActivityCalendarDto>().Update(activityCalendar);


            _context.SaveChanges();
        }

        public void UpdateActivityCalendarDetails(int activityCalendarId, string title, string description)
        {

            var existingCalendar = _context.Set<ActivityCalendarDto>().Find(activityCalendarId);


            if (existingCalendar != null)
            {
                existingCalendar.Title = title;
                existingCalendar.Description = description;


                _context.SaveChanges();
            }
            else
            {
                throw new InvalidOperationException($"Activity calendar with ID {activityCalendarId} not found.");
            }
        }

    }
}
