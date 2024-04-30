using System.ComponentModel.DataAnnotations;

namespace TBA_SMS.core.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [StringLength(50)]
        public string FirstName { get; set; }
        [StringLength(50)]
        public string LastName { get; set; }
        [StringLength(50)]
        public string FatherName { get; set; }
        public string gender { get; set; }
        public string PhoneNo { get; set; }
        public string email { get; set; }
        public string Address { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsActive { get; set; }

        public virtual UserRole UserRole { get; set; }

    }
}
