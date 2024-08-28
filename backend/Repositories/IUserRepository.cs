/*
IUserRepository contient les signatures 
des méthodes que le repository doit implémenter.
*/

using backend.models;

namespace backend.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetUserByIdAsync(int id);                     // récupère un utilisateur par son id, en incluant son profil et ses publications
        Task<User> GetUserByEmailAsync(string Email);     // récupère un utilisateur par son email, avec les relations nécessaires
        Task <IEnumerable<User>> GetAllUsersAsync();      // récupère tous les utilisateurs avec leurs profils et leurs publications associées
        Task AddUserAsync(User user);                            // ajoute un nouvel utilisateur à la base de données
        Task UpdateUserAsync(User user);                       // met à jour un utilisateur existant
        Task DeleteUserAsync(int id);                              // supprime un utilisateur de la base en fonction de son id
    }
}