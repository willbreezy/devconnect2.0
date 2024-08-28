using backend.models;

namespace backend.Repositories
{
    public interface IProfileRepository
    {
        Task<Profile> GetProfileByIdAsync(int id);                      // récupère un profil pas son id, en incluant toutes les relations(User, Experiences, Educations, SocialLinks).
        Task<Profile> GetProfileByUserIdAsync(int userId);            // récupère un profil en fonction de l'id utilisateur, en incluant les memes relations.
        Task<IEnumerable<Profile>> GetAllProfilesAsync();                    // récupère tous les profils avec leurs relations associées.
        Task AddProfileAsync(Profile profile);                               // ajoute un nouveau profil dans la base de données
        Task UpdateProfileAsync(Profile profile);                              // met à jour un profil existant dans la base de données
        Task DeleteProfileAsync(int id);                                     // supprime un profil de la base de données en fonction de son id
        
    }
}