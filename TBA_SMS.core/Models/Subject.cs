using System.ComponentModel.DataAnnotations;

namespace TBA_SMS.core.Models
{
    public class Subject
    {
        [Key]
        public int SubjectId { get; set; }

        public string SubjectName { get; set; }

        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
