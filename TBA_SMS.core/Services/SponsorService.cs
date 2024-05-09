using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TBA_SMS.core.DTO;
using TBA_SMS.core.Interface;
using TBA_SMS.core.Models;

namespace TBA_SMS.core.Services
{
    public class SponsorService : ISponsorService
    {
        private readonly TbaDbContext _context;
        private readonly ILogger _logger;
        public SponsorService(TbaDbContext context)
        {
            _context = context;
            //_logger = logger;
        }

        public async Task<IEnumerable<GetSponsor?>> GetAllSponsors()
        {
            var sponsors = await _context.Sponsors.ToListAsync();
            var users = await _context.Users.ToListAsync();

            var result = users.Select(user => {
                var currentSponsor = sponsors.FirstOrDefault(sponsor => sponsor.UserId == user.UserId);

                if(currentSponsor != null)
                {
                    return new GetSponsor
                    {
                        SponsorDetailId = currentSponsor.SponsorDetailId,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        FatherName = user.FatherName,
                        gender = user.gender,
                        PhoneNo = user.PhoneNo,
                        email = user.email,
                        Address = user.Address,
                        Picture = user.Picture,
                        Occupation = currentSponsor.Occupation,
                        City = currentSponsor.City,
                        Country = currentSponsor.Country
                    };
                }

                return null;

                });

            return result;
        }

        public GetSponsor? GetSponsorById(int sponsorId)
        {
            var sponsor = _context.Sponsors.FirstOrDefault(x => x.SponsorDetailId == sponsorId);
            
            var users = _context.Users.FirstOrDefault(x => x.UserId == sponsor.UserId);

            if(users != null && sponsor != null)
            {
                var result = new GetSponsor
                {
                    SponsorDetailId = sponsor.SponsorDetailId,
                    FirstName = users.FirstName,
                    LastName = users.LastName,
                    FatherName = users.FatherName,
                    gender = users.gender,
                    PhoneNo = users.PhoneNo,
                    email = users.email,
                    Address = users.Address,
                    Picture = users.Picture,
                    Occupation = sponsor.Occupation,
                    City = sponsor.City,
                    Country = sponsor.Country,
                    
                };

                return result;
            }

            return null;
            
        }

        public void UpdateSponsor(int sponsorId, UpdateSponsor sponsorUpdate)
        {
            var updSponsor = _context.Sponsors.FirstOrDefault(x => x.SponsorDetailId == sponsorId);

            if (updSponsor != null)
            {

                var updUser = _context.Users.FirstOrDefault(x => x.UserId == updSponsor.UserId);
                if(updUser != null)
                {
                    updUser.FirstName = sponsorUpdate.FirstName;
                    updUser.LastName = sponsorUpdate.LastName;
                    updUser.FatherName = sponsorUpdate.FatherName;
                    updUser.gender = sponsorUpdate.gender;
                    updUser.PhoneNo = sponsorUpdate.PhoneNo;
                    updUser.email = sponsorUpdate.email;
                    updUser.Address = sponsorUpdate.Address;
                    updUser.Picture = sponsorUpdate.Picture;
                
                    updSponsor.City = sponsorUpdate.City;
                    updSponsor.Country = sponsorUpdate.Country;
                    updSponsor.Occupation = sponsorUpdate.Occupation;

                    _context.Users.Update(updUser);
                    _context.Sponsors.Update(updSponsor);
                    _context.SaveChanges();
                }
            }
        }

        public void AddSponsor(GetSponsor sponsor)
        {
            var sponsorEntity = new Sponsor
            {

            };
        }

        public void DeleteSponsor(int sponsorId)
        {
            
        }

        
    }
}
