using Microsoft.EntityFrameworkCore;
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

        public IEnumerable<GetClass> GetNoOfStudents()
        {
            var result = _context.Students
                .Include(x => x.Classes)
                .GroupBy(s => s.Classes)
                .Select(g => new GetClass
                {
                    ClassId = g.Key.ClassId,
                    ClassName = g.Key.ClassName,
                    NoOfStudents = g.Count(),
                    IsActive = g.Key.IsActive,
                    CreatedBy = g.Key.CreatedBy,
                    CreatedDate = g.Key.CreatedDate,
                    UpdatedBy = g.Key.UpdatedBy,
                    UpdatedDate = g.Key.UpdatedDate,

                })
                .ToList();

            // Demonstrate using a foreach loop to iterate over the results
            foreach (var item in result)
            {
                Console.WriteLine($"Class ID: {item.ClassId}, Class Name: {item.ClassName}, Number of Students: {item.NoOfStudents}");
            }

            // Return the list of results
            return result;
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
                return new GetClass();
            }
        }
    }
}
