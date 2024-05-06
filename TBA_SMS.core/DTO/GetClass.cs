namespace TBA_SMS.core.DTO
{
    public class GetClass
    {

        public int ClassId { get; set; }
        public string ClassName { get; set; }
        public int SectionId { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }
        public int NoOfStudents { get; set; }


    }
}
