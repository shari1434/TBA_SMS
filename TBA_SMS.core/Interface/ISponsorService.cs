using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TBA_SMS.core.DTO;

namespace TBA_SMS.core.Interface
{
    public interface ISponsorService
    {
        Task <IEnumerable<GetSponsor>> GetAllSponsors();
        GetSponsor? GetSponsorById(int sponsorId);
        void AddSponsor(GetSponsor sponsor);
        void UpdateSponsor(int sponsorId, UpdateSponsor sponsorUpdate);
        void DeleteSponsor(int sponsorId);

    }
}
