using TBA_SMS.core.DTO;
using TBA_SMS.core.Models;

namespace TBA_SMS.core.Interface
{
    public interface IActivityCalendarService
    {
        IEnumerable<ActivityCalendar> GetActivityCalendar();


        Task AddActivityCalendar(ActivityCalendarDto activityCalendar);

        void UpdateActivityCalendar(ActivityCalendarDto activityCalendar);

        void UpdateActivityCalendarDetails(int activityCalendarId, string title, string description);


        IEnumerable<ActivityCalendarDto> GetActivityCalendarByMonth(int year, int month);
    }
}
