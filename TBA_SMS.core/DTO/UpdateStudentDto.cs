namespace TBA_SMS.core.DTO
{
    public class UpdateStudentDto
    {
        public int GR_No { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FatherName { get; set; }
        public string Gender { get; set; }
        public string ContactNo { get; set; }
        public string Address { get; set; }
        public string LastClassAttended { get; set; }
        public DateTime DateOfSchoolLeaving { get; set; }
        public string MedicalNeeds { get; set; }
        public string FatherOccupation { get; set; }
        public int FatherIncome { get; set; }
        public string NameOfDependent { get; set; }
        public int ClassId { get; set; }
        public int UserId { get; set; }

        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
