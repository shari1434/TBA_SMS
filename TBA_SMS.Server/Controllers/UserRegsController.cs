using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using TBA_SMS.core.Models;


namespace tba_reg.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegsController : ControllerBase
    {
        SqlConnection conn;
        SqlCommand cmd;
        SqlDataAdapter da;


        public UserRegsController(IConfiguration configuration)
        {
            conn = new SqlConnection(configuration.GetConnectionString("DbTBA"));
            cmd = new SqlCommand();
            da = new SqlDataAdapter();

        }

        [HttpPost]
        [Route("Reg")]

        public string Reg(UserRegs users)
        {
            String msg = String.Empty;
            try
            {
                conn.Open();

                SqlCommand cmd = new("sp_Reg", conn);
                cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
                cmd.Parameters.AddWithValue("@LastName", users.LastName);
                cmd.Parameters.AddWithValue("@Occupation", users.Occupation);
                cmd.Parameters.AddWithValue("@Gender", users.Gender);
                cmd.Parameters.AddWithValue("@Address", users.Address);
                cmd.Parameters.AddWithValue("@Email", users.Email);
                cmd.Parameters.AddWithValue("@Password", users.Password);
                cmd.Parameters.AddWithValue("@IsActive", users.IsActive);

                cmd.CommandType = CommandType.StoredProcedure;

                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Data Inserted";
                }
                else
                {
                    msg = "!Error";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
        }
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(string email, string password)
        {
            try
            {
                conn.Open();

                using (var cmd = new SqlCommand("sp_Login", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Password", password);

                    object resultObj = cmd.ExecuteScalar();
                    if (resultObj != null && int.TryParse(resultObj.ToString(), out int result))
                    {
                        if (result > 0)
                        {
                            return Ok(new { message = "Login successful" });
                        }
                        else if (result == 0)
                        {
                            return Unauthorized(new { message = "Invalid email or password" });
                        }
                    }
                    else
                    {

                        return StatusCode(500, new { message = "Unexpected return value from database." });
                    }
                }

            }
            catch (SqlException ex)
            {

                return StatusCode(500, new { message = "A database error occurred." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while processing your request." });
            }


            return StatusCode(500, new { message = "An unknown error occurred." });
        }


    }
}
