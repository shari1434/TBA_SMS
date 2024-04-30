using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TBA_SMS.core.Models
{
    public class StudentAttendance
    {

        [Key]
        public int StudentAttendanceId { get; set; }
        public DateTime AttendanceDate { get; set; }
        public bool IsPresent { get; set; }


        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual User User { get; set; }

        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }


    }
}
