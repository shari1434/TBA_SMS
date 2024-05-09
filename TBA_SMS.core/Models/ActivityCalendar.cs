

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TBA_SMS.core.Models
{
    public class ActivityCalendar
    {
        public int ActivityCalendarId { get; set; }
        public string? Title { get; set; }

        [StringLength(200)]
        public string? Description { get; set; }

        public DateTime Date { get; set; }

        [ForeignKey("Class")]
        public int ClassId { get; set; }

        public virtual Classes Class { get; set; }


        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool? IsActive { get; set; }


    }
}
