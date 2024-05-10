
using System.Text.Json.Serialization;

namespace TBA_SMS.core.DTO
{
    public class GetStudentByClassDto
    {
        [JsonPropertyName("grNo")]
        public int GR_No { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FatherName { get; set; }

    }
}
