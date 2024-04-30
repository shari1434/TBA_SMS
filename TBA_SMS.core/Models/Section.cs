using System.ComponentModel.DataAnnotations;

namespace TBA_SMS.core.Models
{
    public class Section
    {
        [Key]
        public int SectionId { get; set; }

        public string SectionName { get; set; }

        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
