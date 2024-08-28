using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.models
{
    public class User 
    {
        [Key] // clé primaire
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "Le nom est obligatoire.")]
        [MaxLength(100)]
        public  string Name { get; set; }

        [Required(ErrorMessage = "L'adresse e-mail est obligatoire.")]
        [EmailAddress(ErrorMessage = "L'adresse e-mail est invalide.")]
        [MaxLength(100)] // définit une longeur pour éviter les erreurs d'indexation dans la base de données
        public  string Email { get; set; }

        [Required(ErrorMessage = "Le mot de passe est obligatoire.")]
        [MinLength(8, ErrorMessage = "Le mot de passe doit contenir au moins 8 caractères.")]
        public  string Password { get; set; }

        public string? Avatar { get; set; } // champ facultatif

        [DataType(DataType.DateTime)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime Date { get; set; } = DateTime.UtcNow; // définit la valeur par défaut à la date actuelle

        // Relation One-to-One avec Profile
        public Profile Profile { get; set; }

        // Relation One-to-Many avec Post
        public List<Post> Posts { get; set; } = new List<Post>();
    }
}