using backend.models;

namespace backend.Repositories
{
    public interface IPostRepository
    {
        Task<Post> GetPostByIdAsync(int id);            //Récupère un post par son ID, en incluant toutes les relations (User, Likes, Comments).
        Task<IEnumerable<Post>> GetAllPostsAsync();     // Récupère tous les posts avec leurs relations associées.
        Task<IEnumerable<Post>> GetPostsByUserIdAsync(int userId);        // Récupère tous les posts d'un utilisateur donné.
        Task AddPostAsync(Post post);      // Ajoute un nouveau post à la base de données.
        Task UpdatePostAsync(Post post);   // Met à jour un post existant.
        Task DeletePostAsync(int id);       // Supprime un post par son ID.
        Task AddLikeToPostAsync(int postId, Like like);       // Ajoute un like à un post existant.
        Task AddCommentToPostAsync(int postId, Comment comment);          //  Ajoute un commentaire à un post existant.
        
    }
}