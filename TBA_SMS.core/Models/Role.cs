namespace TBA_SMS.core.Models
{
    public class Role
    {
        public int Id { get; set; }

        public string RoleName { get; set; }

        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsActive { get; set; }




    }
}
