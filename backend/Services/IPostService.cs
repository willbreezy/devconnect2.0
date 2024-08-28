using backend.models;

namespace backend.Services
{
    public interface IPostService
    {
        Task<Post> GetPostByIdAsync(int id);
        Task<IEnumerable<Post>> GetAllPostsAsync();
        Task<IEnumerable<Post>> GetPostsByUserIdAsync(int userId);
        Task AddPostAsync(Post post);
        Task UpdatePostAsync(Post post);
        Task DeletePostAsync(int id);
        Task AddLikeToPostAsync(int postId, Like like);
        Task AddCommentToPostAsync(int postId, Comment comment);
    }
}