using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using TBA_SMS.core;
using TBA_SMS.core.Interface;
using TBA_SMS.core.Models;
using TBA_SMS.Server.DTO;

namespace TBA_SMS.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly TbaDbContext _context;
        private readonly ILogger<StudentController> _logger;
        private readonly IStudentService _studentService;

        public StudentController(TbaDbContext context, ILogger<StudentController> logger, IStudentService studentService)
        {
            _context = context;
            _logger = logger;
            _studentService = studentService;
        }

        // GET: api/Student
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            try
            {
                // Call the stored procedure and get the results
                var students = await _context.Students.FromSqlRaw("[dbo].[GetAllStudents]").ToListAsync();

                // Return the list of students
                return Ok(students);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while fetching students");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/Student/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            try
            {
                //var student = await _context.Students.FirstOrDefaultAsync(s => s.StudentId == id);
                var student = _studentService.GetStudentById(id);

                if (student == null)
                {
                    return NotFound();
                }

                return Ok(new
                {
                    Student = student,
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while fetching student with ID {id}");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<AddStudentDto>> CreateStudent([FromBody] AddStudentDto studentDto)
        {
            if (studentDto == null)
            {
                return BadRequest("Invalid student data.");
            }

            try
            {

                // Define parameters for the stored procedure
                var parameters = new[]
                {
            new SqlParameter("@GR_No", studentDto.GR_No),
            new SqlParameter("@FirstName", studentDto.FirstName),
            new SqlParameter("@LastName", studentDto.LastName),
            new SqlParameter("@FatherName", studentDto.FatherName),
            new SqlParameter("@Gender", studentDto.Gender),
            new SqlParameter("@ContactNo", studentDto.ContactNo),
            new SqlParameter("@Address", studentDto.Address),
            new SqlParameter("@lastClassAttendent", studentDto.LastClassAttended),
            new SqlParameter("@DateOfSchoolLeaving", studentDto.DateOfSchoolLeaving),
            new SqlParameter("@MedicalNeeds", studentDto.MedicalNeeds),
            new SqlParameter("@FatherOccupation", studentDto.FatherOccupation),
            new SqlParameter("@FatherIncome", studentDto.FatherIncome),
            new SqlParameter("@NameOfDependent", studentDto.NameOfDependent),
            new SqlParameter("@CreatedBy", studentDto.CreatedBy),
            new SqlParameter("@UpdatedBy", studentDto.UpdatedBy),
            new SqlParameter("@IsActive", studentDto.IsActive),
            new SqlParameter("@ClassId", studentDto.ClassId),
            new SqlParameter("@UserId", studentDto.UserId)
        };

                // Execute the stored procedure
                var studentIdParameter = new SqlParameter
                {
                    ParameterName = "@InsertedStudentId",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Output
                };

                _context.Database.ExecuteSqlRaw("[dbo].[InsertStudent] @GR_No, @FirstName, @LastName, @FatherName, @Gender, @ContactNo, @Address, @lastClassAttendent, @DateOfSchoolLeaving, @MedicalNeeds,@FatherOccupation, @FatherIncome, @NameOfDependent, @CreatedBy, @UpdatedBy, @IsActive, @ClassId, @UserId, @InsertedStudentId OUT",
                    parameters.Concat(new[] { studentIdParameter }).ToArray());

                var newStudentId = (int)studentIdParameter.Value;

                // Retrieve the newly created student from the database
                var newStudent = await _context.Students.FindAsync(newStudentId);

                // Map the new student to a DTO
                var newStudentDto = new AddStudentDto
                {

                    GR_No = newStudent.GR_No,
                    FirstName = newStudent.FirstName,
                    LastName = newStudent.LastName,
                    FatherName = newStudent.FatherName,
                    Gender = newStudent.Gender,
                    ContactNo = newStudent.ContactNo,
                    Address = newStudent.Address,
                    LastClassAttended = newStudent.LastClassAttendent,
                    DateOfSchoolLeaving = newStudent.DateOfSchoolLeaving,
                    MedicalNeeds = newStudent.MedicalNeeds,
                    FatherOccupation = newStudent.FatherOccupation,
                    FatherIncome = newStudent.FatherIncome,
                    NameOfDependent = newStudent.NameOfDependent,
                    ClassId = newStudent.ClassId,
                    UserId = newStudent.UserId
                };

                // Return the created student DTO
                return CreatedAtAction(nameof(GetStudent), new { id = newStudent.StudentId }, newStudentDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while creating the student.");
                return StatusCode(500, "Internal server error.");
            }
        }

        // PUT: api/Student/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, Student student)
        {
            try
            {
                if (id != student.StudentId)
                {
                    return BadRequest("ID mismatch");
                }

                _context.Entry(student).State = EntityState.Modified;

                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    return StatusCode(500, "Internal server error due to concurrency issue");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while updating student with ID {id}");
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/Student/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            try
            {
                var student = await _context.Students.FindAsync(id);
                if (student == null)
                {
                    return NotFound();
                }

                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while deleting student with ID {id}");
                return StatusCode(500, "Internal server error");
            }
        }

        private bool StudentExists(int id)
        {
            return _context.Students.Any(s => s.StudentId == id);
        }
    }
}
