using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TBA_SMS.core.Models
{
    public class Sponsor
    {
        [Key]
        public int SponsorDetailId { get; set; }

        public string Occupation { get; set; }

        public string ContactNo { get; set; }

        public string Address { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

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
