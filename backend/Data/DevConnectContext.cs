using Microsoft.EntityFrameworkCore;
using backend.models;

namespace backend.data
{
    public class DevConnectContext : DbContext
    {
        // DbSet pour les modèles 
        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Post> Posts { get; set; }

        //public DbSet<Comment> Comments { get; set; } 
        //public DbSet<Like> Likes { get; set; } 

        // Configurer les relations et les contraintes

        // Constructeur avec DbContextOptions
        public DevConnectContext(DbContextOptions<DevConnectContext> options)
            : base(options)
        {     
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Configure SQLite as the database provider
                
                optionsBuilder.UseSqlite("Data Source=devconnect.db; Pooling=True; Max Pool Size=100; Min Pool Size=5;");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Configuration de la relation un-à-un entre User et Profile
            modelBuilder.Entity<User>()
            .HasOne(u => u.Profile)
            .WithOne(p => p.User)
            .HasForeignKey<Profile>(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);

            // Configuration de la relation un-à-plusieurs entre User et Post
            modelBuilder.Entity<User>()
            .HasMany(u => u.Posts)
            .WithOne(p => p.User)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);

/*
            // Configuration de la relation un-à-plusieurs entre Post et Comment
            modelBuilder.Entity<Post>()
            .HasMany(p => p.Comments)
            .WithOne(c => c.Post)
            .HasForeignKey(c => c.PostId)
            .OnDelete(DeleteBehavior.Cascade);

            // Configuration de la relation un-à-plusieurs entre User et Comment 
            modelBuilder.Entity<User>()
            .HasMany(u => u.Comments)
            .WithOne(c => c.User)
            .HasForeignKey(c => c.UserId)
            .OnDelete(DeleteBehavior.Cascade);

            // Configuration de la relation un-à-plusieurs entre Post et Like
            modelBuilder.Entity<Post>()
            .HasMany(p => p.Likes)
            .WithOne(l => l.User)
            .HasForeignKey(l => l.UserId)
            .OnDelete(DeleteBehavior.Cascade);

*/
        }
    }
}