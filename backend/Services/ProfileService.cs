using backend.models;
using backend.Repositories;

namespace backend.Services
{
    public class ProfileService : IProfileService
    {
        private readonly IProfileRepository _profileRepository;

        public ProfileService(IProfileRepository profileRepository)
        {
            _profileRepository = profileRepository;
        }

        public async Task<Profile> GetProfileByIdAsync(int id)
        {
            return await _profileRepository.GetProfileByIdAsync(id);
        }

        public async Task<IEnumerable<Profile>> GetAllProfilesAsync()
        {
            return await _profileRepository.GetAllProfilesAsync();
        }

        public async Task<Profile> GetProfileByUserIdAsync(int userId)
        {
            return await _profileRepository.GetProfileByUserIdAsync(userId);
        }

        public async Task AddProfileAsync(Profile profile)
        {
            await _profileRepository.AddProfileAsync(profile);
        }

        public async Task UpdateProfileAsync(Profile profile)
        {
            await _profileRepository.UpdateProfileAsync(profile);
        }

        public async Task DeleteProfileAsync(int id)
        {
            await _profileRepository.DeleteProfileAsync(id);
        }
    }
}