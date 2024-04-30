using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TBA_SMS.core.Models
{
    public class Teacher
    {
        [Key]
        public int TeacherDetailId { get; set; }

        public string Address { get; set; }

        public DateOnly DateOfBirth { get; set; }

        public DateTime DateOfResignation { get; set; }

        public string CnicNo { get; set; }

        public string MartialStatus { get; set; }

        public string ContactNo { get; set; }

        public string EmgContactNumber { get; set; }

        public int Salary { get; set; }

        public DateOnly DateOfEmployment { get; set; }

        public string Email { get; set; }

        public string Designation { get; set; }

        public string Qualification { get; set; }

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
