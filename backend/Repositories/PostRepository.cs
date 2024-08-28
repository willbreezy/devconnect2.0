using backend.data;
using backend.models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class PostRepository
    {
        private readonly DevConnectContext _context;

        public PostRepository(DevConnectContext context)
        {
            _context = context;
        }

        public async Task<Post> GetPostByIdAsync(int id)
        {
            return await _context.Posts
                                 .Include(p => p.User)                         // Inclure l'utilisateur associé
                                 .Include(p => p.Likes)                       // Inclure les likes associés
                                 .Include(p => p.Comments)              // Inclure les commentaires associés
                                 .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Post>> GetAllPostsAsync()
        {
            return await _context.Posts
                                 .Include(p => p.User)
                                 .Include(p => p.Likes)
                                 .Include(p => p.Comments)
                                 .ToListAsync();
        }

        public async Task<IEnumerable<Post>> GetPostsByUserIdAsync(int userId)
        {
            return await _context.Posts
                                 .Include(p => p.User)
                                 .Include(p => p.Likes)
                                 .Include(p => p.Comments)
                                 .Where(p => p.UserId == userId)
                                 .ToListAsync();
        }

        public async Task AddPostAsync(Post post)
        {
            await _context.Posts.AddAsync(post);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePostAsync(Post post)
        {
            _context.Posts.Update(post);
            await _context.SaveChangesAsync();
        }

        public async Task DeletePostAsync(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post != null)
            {
                _context.Posts.Remove(post);
                await _context.SaveChangesAsync();
            }
        }

        public async Task AddLikeToPostAsync(int postId, Like like)
        {
            var post = await _context.Posts.Include(p => p.Likes).FirstOrDefaultAsync(p => p.Id == postId);
            if (post != null)
            {
                post.Likes.Add(like);
                await _context.SaveChangesAsync();
            }
        }

        public async Task AddCommentToPostAsync(int postId, Comment comment)
        {
            var post = await _context.Posts.Include(p => p.Comments).FirstOrDefaultAsync(p => p.Id == postId);
            if (post != null)
            {
                post.Comments.Add(comment);
                await _context.SaveChangesAsync();
            }
        }
    }
}