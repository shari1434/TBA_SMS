using TBA_SMS.core.DTO;

namespace TBA_SMS.core.Interface
{
    public interface IClassService
    {
        public GetClass GetNoOfStudentsInClass(string className);
        IEnumerable<GetClass> GetNoOfStudents();

    }
}
