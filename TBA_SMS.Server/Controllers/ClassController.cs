using Microsoft.AspNetCore.Mvc;
using TBA_SMS.core.Interface;

namespace TBA_SMS.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private readonly IClassService _classService;
        private readonly ILogger<ClassController> _logger;

        public ClassController(IClassService classService, ILogger<ClassController> logger)
        {
            _classService = classService;
            _logger = logger;
        }
        [HttpGet("[action]")]
        public IActionResult GetNoOfStudentsInClass(string classname)
        {
            var result = _classService.GetNoOfStudentsInClass(classname);
            return Ok(result);
        }
    }
}

