using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.ExceptionServices;

namespace TBA_SMS.core.Models
{
    public class Sponsor
    {
        [Key]
        public int SponsorDetailId { get; set; }

        public string Occupation { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

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
