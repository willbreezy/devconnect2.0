using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.models
{
    public class Post
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        // Clé étrangère vers le modèle User
        [Required]
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }

        [Required(ErrorMessage = "Le texte du post est obligatoire.")]
        public string Text { get; set; }

        public string Name { get; set; }

        public string Avatar { get; set; }

        // Liste des likes
        public List<Like> Likes { get; set; } = new List<Like>();

        // Liste des commentaires
        public List<Comment> Comments {get; set; } = new List<Comment>();

        [DataType(DataType.DateTime)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime Date { get; set; } = DateTime.UtcNow;
    }

    public class Like
    {
        // Clé primaire pour les likes
        [Key]
        public int Id { get; set; }

        // Clé étrangère vers l'utilisateur qui a aimé le post
        [Required]
        [ForeignKey("User")]
        public int UserId { get; set; } // Relation avec l'entité User
        public User User { get; set; }
    }

    public class Comment
    {
        //Clé primaire pour le commentaire
        [Key]
        public int Id { get; set; }

        // Clé étrangère vers l'utilisateur qui a commenté
        [Required]
        [ForeignKey("User")]
        public int UserId { get; set;} // Relation avec l'entité User
        public User User { get; set; }

        [Required(ErrorMessage = "Le texte du commentaire est obligatoire.")]
        public string Text { get; set; }

        public string Name { get; set; }

        public string Avatar {get; set; }

        [DataType(DataType.DateTime)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime Date { get; set; } = DateTime.UtcNow;
    }
}