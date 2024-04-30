using TBA_SMS.core.DTO;
using TBA_SMS.core.Interface;
using TBA_SMS.core.Models;

namespace TBA_SMS.core.Services
{
    public class StudentService : IStudentService
    {
        private readonly TbaDbContext _context;

        public StudentService(TbaDbContext context)
        {
            _context = context;
        }

        public IEnumerable<GetStudent> GetAllStudents()
        {
            // Fetch all students from the database and map to GetStudent DTOs
            var students = _context.Students.ToList();

            // Convert the entities to DTOs (Data Transfer Objects)
            return students.Select(student => new GetStudent
            {
                StudentId = student.StudentId,
                GR_No = student.GR_No,
                FirstName = student.FirstName,
                LastName = student.LastName,
                FatherName = student.FatherName,
                Gender = student.Gender,
                ContactNo = student.ContactNo,
                Address = student.Address,
                LastClassAttended = student.LastClassAttendent,
                DateOfSchoolLeaving = student.DateOfSchoolLeaving,
                MedicalNeeds = student.MedicalNeeds,
                FatherOccupation = student.FatherOccupation,
                FatherIncome = student.FatherIncome,
                NameOfDependent = student.NameOfDependent,
                ClassId = student.ClassId,
                UserId = student.UserId,
                CreatedBy = student.CreatedBy,
                CreatedDate = student.CreatedDate,
                UpdatedBy = student.UpdatedBy,
                UpdatedDate = student.UpdatedDate,
                IsActive = student.IsActive
            });
        }

        public GetStudent GetStudentById(int studentId)
        {
            // Find the student by ID
            var student = _context.Students.FirstOrDefault(x => x.StudentId == studentId);

            if (student == null) return null;

            // Convert the entity to DTO
            return new GetStudent
            {
                StudentId = student.StudentId,
                GR_No = student.GR_No,
                FirstName = student.FirstName,
                LastName = student.LastName,
                FatherName = student.FatherName,
                Gender = student.Gender,
                ContactNo = student.ContactNo,
                Address = student.Address,
                LastClassAttended = student.LastClassAttendent,
                DateOfSchoolLeaving = student.DateOfSchoolLeaving,
                MedicalNeeds = student.MedicalNeeds,
                FatherOccupation = student.FatherOccupation,
                FatherIncome = student.FatherIncome,
                NameOfDependent = student.NameOfDependent,
                ClassId = student.ClassId,
                UserId = student.UserId,
                CreatedBy = student.CreatedBy,
                CreatedDate = student.CreatedDate,
                UpdatedBy = student.UpdatedBy,
                UpdatedDate = student.UpdatedDate,
                IsActive = student.IsActive
            };
        }

        public void AddStudent(GetStudent student)
        {
            // Convert the DTO to entity
            var studentEntity = new Student
            {
                StudentId = student.StudentId,
                GR_No = student.GR_No,
                FirstName = student.FirstName,
                LastName = student.LastName,
                FatherName = student.FatherName,
                Gender = student.Gender,
                ContactNo = student.ContactNo,
                Address = student.Address,
                LastClassAttendent = student.LastClassAttended,
                DateOfSchoolLeaving = student.DateOfSchoolLeaving,
                MedicalNeeds = student.MedicalNeeds,
                FatherOccupation = student.FatherOccupation,
                FatherIncome = student.FatherIncome,
                NameOfDependent = student.NameOfDependent,
                ClassId = student.ClassId,
                UserId = student.UserId,
                CreatedBy = student.CreatedBy,
                CreatedDate = student.CreatedDate,
                UpdatedBy = student.UpdatedBy,
                UpdatedDate = student.UpdatedDate,
                IsActive = student.IsActive
            };

            // Add the student to the context
            _context.Students.Add(studentEntity);
            _context.SaveChanges();
        }

        public void UpdateStudent(GetStudent student)
        {
            // Find the existing student entity in the context
            var studentEntity = _context.Students.Find(student.StudentId);

            if (studentEntity == null) return;

            // Update the properties
            studentEntity.GR_No = student.GR_No;
            studentEntity.FirstName = student.FirstName;
            studentEntity.LastName = student.LastName;
            studentEntity.FatherName = student.FatherName;
            studentEntity.Gender = student.Gender;
            studentEntity.ContactNo = student.ContactNo;
            studentEntity.Address = student.Address;
            studentEntity.LastClassAttendent = student.LastClassAttended;
            studentEntity.DateOfSchoolLeaving = student.DateOfSchoolLeaving;
            studentEntity.MedicalNeeds = student.MedicalNeeds;
            studentEntity.FatherOccupation = student.FatherOccupation;
            studentEntity.FatherIncome = student.FatherIncome;
            studentEntity.NameOfDependent = student.NameOfDependent;
            studentEntity.ClassId = student.ClassId;
            studentEntity.UserId = student.UserId;
            studentEntity.CreatedBy = student.CreatedBy;
            studentEntity.CreatedDate = student.CreatedDate;
            studentEntity.UpdatedBy = student.UpdatedBy;
            studentEntity.UpdatedDate = student.UpdatedDate;
            studentEntity.IsActive = student.IsActive;

            // Update the context
            _context.Students.Update(studentEntity);
            _context.SaveChanges();
        }

        public void DeleteStudent(int studentId)
        {
            // Find the student by ID
            var student = _context.Students.Find(studentId);

            if (student == null) return;

            // Remove the student from the context
            _context.Students.Remove(student);
            _context.SaveChanges();
        }
    }
}
