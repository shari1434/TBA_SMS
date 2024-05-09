using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TBA_SMS.core.DTO
{
    public class GetSponsor
    {
        public int SponsorDetailId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FatherName { get; set; }
        public string gender { get; set; }
        public string PhoneNo { get; set; }
        public string email { get; set; }
        public string Address { get; set; }
        public string Occupation { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string? Picture { get; set; }
        public int createdby { get; set; }
        public DateTime createddate { get; set; }
        public int? updatedby { get; set; }
        public DateTime? updateddate { get; set; }
        public bool isactive { get; set; }

    }
}
