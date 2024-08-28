using backend.data;
using backend.models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class ProfileRepository : IProfileRepository
    {
        private readonly DevConnectContext _context;

        public ProfileRepository(DevConnectContext context)
        {
            _context = context;
        }

        public async Task<Profile> GetProfileByIdAsync(int id)
        {
            return await _context.Profiles
            .Include(p => p.User)
            .Include(p => p.Experiences)
            .Include(p => p.Educations)
            .Include(p => p.Social)
            .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Profile> GetProfileByUserIdAsync(int userId)
        {
            return await _context.Profiles
                                 .Include(p => p.User)
                                 .Include(p => p.Experiences)
                                 .Include(p => p.Educations)
                                 .Include(p => p.Social)
                                 .FirstOrDefaultAsync(p => p.UserId == userId);
        }

        public async Task<IEnumerable<Profile>> GetAllProfilesAsync()
        {
            return await _context.Profiles
                                 .Include(p => p.User)
                                 .Include(p => p.Experiences)
                                 .Include(p => p.Educations)
                                 .Include(p => p.Social)
                                 .ToListAsync();
        }

         public async Task AddProfileAsync(Profile profile)
        {
            await _context.Profiles.AddAsync(profile);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProfileAsync(Profile profile)
        {
            _context.Profiles.Update(profile);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProfileAsync(int id)
        {
            var profile = await _context.Profiles.FindAsync(id);
            if (profile != null)
            {
                _context.Profiles.Remove(profile);
                await _context.SaveChangesAsync();
            }
        }
    }
}