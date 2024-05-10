namespace TBA_SMS.core.DTO
{
    public class ActivityCalendarDto
    {
        public int ActivityCalendarId { get; set; }
        public string? Title { get; set; }

        public string? Description { get; set; }

        public DateTime Date { get; set; }

        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool? IsActive { get; set; }




    }
}
