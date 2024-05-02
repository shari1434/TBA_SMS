using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using TBA_SMS.core;
using TBA_SMS.core.DTO;
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
        //        public async Task<ActionResult<AddStudentDto>> CreateStudent([FromBody] AddStudentDto studentDto)
        //        {
        //            // Validate the input DTO
        //            if (studentDto == null)
        //            {
        //                return BadRequest("Invalid student data.");
        //            }

        //            try
        //            {
        //                var parameters = new[]
        //                {
        //    new SqlParameter("@GR_No", studentDto.GR_No),
        //    new SqlParameter("@FirstName", studentDto.FirstName),
        //    new SqlParameter("@LastName", studentDto.LastName),
        //    new SqlParameter("@FatherName", studentDto.FatherName),
        //    new SqlParameter("@Gender", studentDto.Gender),
        //    new SqlParameter("@ContactNo", studentDto.ContactNo),
        //    new SqlParameter("@Address", studentDto.Address),
        //    new SqlParameter("@LastClassAttended", studentDto.LastClassAttended),
        //    new SqlParameter("@DateOfSchoolLeaving", studentDto.DateOfSchoolLeaving),
        //    new SqlParameter("@MedicalNeeds", studentDto.MedicalNeeds),
        //    new SqlParameter("@FatherOccupation", studentDto.FatherOccupation),
        //    new SqlParameter("@FatherIncome", studentDto.FatherIncome),
        //    new SqlParameter("@NameOfDependent", studentDto.NameOfDependent),
        //    new SqlParameter("@ClassId", studentDto.ClassId),
        //    new SqlParameter("@UserId", studentDto.UserId),
        //    new SqlParameter("@CreatedBy", studentDto.CreatedBy),
        //    new SqlParameter("@UpdatedBy", studentDto.UpdatedBy),
        //    new SqlParameter("@IsActive", studentDto.IsActive),
        //    new SqlParameter("@InsertedStudentId", SqlDbType.Int) { Direction = ParameterDirection.Output }
        //};

        //                // Execute the stored procedure with the parameters
        //                await _context.Database.ExecuteSqlRawAsync(
        //                    "EXEC InsertStudent @GR_No, @FirstName, @LastName, @FatherName, @Gender, @ContactNo, @Address, @LastClassAttended, @DateOfSchoolLeaving, @MedicalNeeds, @FatherOccupation, @FatherIncome, @NameOfDependent, @ClassId, @UserId, @CreatedBy, @UpdatedBy, @IsActive, @InsertedStudentId OUT",
        //                    parameters
        //                );
        //                return CreatedAtAction(nameof(GetStudent), new { message = "success fully" });
        //            }
        //            catch (Exception ex)
        //            {
        //                _logger.LogError(ex, "An error occurred while creating the student.");
        //                return StatusCode(500, "An error occurred while processing your request.");
        //            }
        //        }


        public async Task<ActionResult<AddStudentDto>> CreateStudent([FromBody] AddStudentDto studentDto)
        {
            // Validate the input DTO
            if (studentDto == null)
            {
                return BadRequest("Invalid student data.");
            }

            try
            {
                // Define the parameters
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
    new SqlParameter("@UserId", studentDto.UserId),
    //new SqlParameter("@InsertedStudentId", SqlDbType.Int) { Direction = ParameterDirection.Output }
};

                // Execute the stored procedure
                await _context.Database.ExecuteSqlRawAsync(
                    "EXEC InsertStudent @GR_No, @FirstName, @LastName, @FatherName, @Gender, @ContactNo, @Address, @lastClassAttendent, @DateOfSchoolLeaving, @MedicalNeeds, @FatherOccupation, @FatherIncome, @NameOfDependent, @CreatedBy, @UpdatedBy, @IsActive, @ClassId, @UserId",
                    parameters
                );

                // Return a successful response
                return Ok(new { message = "Student successfully created" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while creating the student.");
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }


        [HttpPut("{GR_No}")]
        public async Task<IActionResult> UpdateStudent(int GR_No, [FromBody] UpdateStudentDto studentDto)
        {
            // Validate the input DTO
            if (studentDto == null)
            {
                return BadRequest("Invalid student data.");
            }

            try
            {
                // Find the student by GR_No using a LINQ query
                var student = await _context.Students.FirstOrDefaultAsync(s => s.GR_No == GR_No);
                if (student == null)
                {
                    return NotFound($"No student found with GR_No: {GR_No}");
                }

                // Check if the provided ClassId exists in the Class table
                var classExists = await _context.Class.AnyAsync(c => c.ClassId == studentDto.ClassId);
                if (!classExists)
                {
                    return BadRequest($"Invalid ClassId: {studentDto.ClassId}");
                }

                // Update the student record with new information from the input DTO
                student.FirstName = studentDto.FirstName;
                student.LastName = studentDto.LastName;
                student.FatherName = studentDto.FatherName;
                student.Gender = studentDto.Gender;
                student.ContactNo = studentDto.ContactNo;
                student.Address = studentDto.Address;
                student.LastClassAttendent = studentDto.LastClassAttended;
                student.DateOfSchoolLeaving = studentDto.DateOfSchoolLeaving;
                student.MedicalNeeds = studentDto.MedicalNeeds;
                student.FatherOccupation = studentDto.FatherOccupation;
                student.FatherIncome = studentDto.FatherIncome;
                student.NameOfDependent = studentDto.NameOfDependent;
                student.ClassId = studentDto.ClassId;
                student.UserId = studentDto.UserId;
                student.UpdatedBy = studentDto.UpdatedBy;
                student.UpdatedDate = DateTime.UtcNow; // Update the date

                // Save changes to the database
                await _context.SaveChangesAsync();

                // Return NoContent (204) to indicate successful update
                return NoContent();
            }
            catch (Exception ex)
            {
                // Log the error and return an internal server error
                _logger.LogError(ex, $"Error occurred while updating student with GR_No: {GR_No}");
                return StatusCode(500, "Internal server error.");
            }
        }



        // delete: api/student/5
        [HttpDelete("{GR_No}")]
        public async Task<IActionResult> DeleteStudent(int GR_No)
        {
            try
            {
                // Find the student by GR_No using a LINQ query
                var student = await _context.Students.FirstOrDefaultAsync(s => s.GR_No == GR_No);
                if (student == null)
                {
                    return NotFound($"No student found with GR_No: {GR_No}");
                }

                // Remove the student from the context and save changes
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();

                // Return NoContent (204) to indicate successful deletion
                return NoContent();
            }
            catch (Exception ex)
            {
                // Log the error and return an internal server error
                _logger.LogError(ex, $"Error occurred while deleting student with GR_No: {GR_No}");
                return StatusCode(500, "Internal server error.");
            }
        }

        private bool StudentExists(int GR_No)
        {
            // Check if a student exists with the given GR_No
            return _context.Students.Any(s => s.GR_No == GR_No);
        }
    }
}
