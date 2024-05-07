using TBA_SMS.core;
using TBA_SMS.core.DTO;
using TBA_SMS.core.Interface;

namespace TBA_SMS.Core.Service
{
    public class ClassService : IClassService
    {
        private readonly TbaDbContext _context;

        public ClassService(TbaDbContext context)
        {
            _context = context;
        }

        public GetClass GetNoOfStudentsInClass(string className)
        {
            var result = _context.Students
                .Where(s => s.Classes.ClassName == className)
                .GroupBy(s => s.Classes) // Group by class name
                .Select(g => new
                {
                    g.Key.ClassId,
                    g.Key.ClassName,
                    NoOfStudents = g.Count() // Count number of students
                })
                .FirstOrDefault(); // Retrieve the first (and only) result

            // Return the result as a tuple
            if (result != null)
            {
                return new GetClass()
                {
                    ClassId = result.ClassId,
                    ClassName = result.ClassName,
                    NoOfStudents = result.NoOfStudents
                };
            }
            else
            {
                // Return a default value if no matching class is found
                return (GetNoOfStudentsInClass(className));
            }
        }

    }
}
