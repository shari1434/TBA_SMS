using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TBA_SMS.core.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }
        public int GR_No { get; set; }

        [StringLength(50)]
        public string FirstName { get; set; }

        [StringLength(50)]
        public string LastName { get; set; }

        [StringLength(50)]
        public string FatherName { get; set; }

        [StringLength(10)]
        public string Gender { get; set; }

        [StringLength(50)]
        public string ContactNo { get; set; }

        [StringLength(100)]
        public string Address { get; set; }
        [StringLength(100)]
        public string LastClassAttendent { get; set; }

        public DateTime DateOfSchoolLeaving { get; set; }

        [StringLength(100)]
        public string MedicalNeeds { get; set; }

        [StringLength(100)]

        public string FatherOccupation { get; set; }

        public int FatherIncome { get; set; }

        [StringLength(100)]
        public string NameOfDependent { get; set; }

        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }

        [ForeignKey("Classes")]
        public int ClassId { get; set; }

        public virtual Classes Classes { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        public virtual User User { get; set; }


    }
}
