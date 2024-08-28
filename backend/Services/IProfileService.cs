using backend.models;

namespace backend.Services
{
    public interface IProfileService
    {
        Task<Profile> GetProfileByIdAsync(int id);
        Task<IEnumerable<Profile>> GetAllProfilesAsync();
        Task<Profile> GetProfileByUserIdAsync(int userId);
        Task AddProfileAsync(Profile profile);
        Task UpdateProfileAsync(Profile profile);
        Task DeleteProfileAsync(int id);
    }
}