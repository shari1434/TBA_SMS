using TBA_SMS.core.DTO;

namespace TBA_SMS.core.Interface
{
    public interface IStudentService
    {
        IEnumerable<GetStudent> GetAllStudents();
        GetStudent GetStudentById(int studentId);
        void AddStudent(GetStudent student);
        void UpdateStudent(GetStudent student);
        void DeleteStudent(int studentId);
    }
}
