using backend.models;
using backend.Repositories;

namespace backend.Services
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;

        public PostService(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public async Task<Post> GetPostByIdAsync(int id)
        {
            return await _postRepository.GetPostByIdAsync(id);
        }

        public async Task<IEnumerable<Post>> GetAllPostsAsync()
        {
            return await _postRepository.GetAllPostsAsync();
        }

        public async Task<IEnumerable<Post>> GetPostsByUserIdAsync(int userId)
        {
            return await _postRepository.GetPostsByUserIdAsync(userId);
        }

        public async Task AddPostAsync(Post post)
        {
            await _postRepository.AddPostAsync(post);
        }

        public async Task UpdatePostAsync(Post post)
        {
            await _postRepository.UpdatePostAsync(post);
        }

        public async Task DeletePostAsync(int id)
        {
            await _postRepository.DeletePostAsync(id);
        }

        public async Task AddLikeToPostAsync(int postId, Like like)
        {
            await _postRepository.AddLikeToPostAsync(postId, like);
        }

        public async Task AddCommentToPostAsync(int postId, Comment comment)
        {
            await _postRepository.AddCommentToPostAsync(postId, comment);
        }
    }
}