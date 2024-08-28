using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.models
{
    public class Profile
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        // Relation avec le modèle User
        [Required]
        [ForeignKey("User")]
        public int UserId {get; set; }
        public User User { get; set; }

        public string Company { get; set; }

        [Url(ErrorMessage = "Le site web n'est pas valide.")]
        public string Website { get; set; }

        public string Location { get; set; }

        [Required(ErrorMessage = "Le status est obligatoire.")]
        public string Status { get; set; }

        [Required(ErrorMessage = "Les compétences sont obligatoires.")]
        public List<string> Skills { get; set; } = new List<string>();

        public string Bio { get; set; }

        public string GithubUsername { get; set; }

        // Liste des expériences 
        public List<Experience> Experiences { get; set; } = new List<Experience>();

        // Liste des formations 
        public List<Education> Educations { get; set; } = new List<Education>(); 

        // Réseaux sociaux
        public SocialLinks Social { get; set; } = new SocialLinks();

        [DataType(DataType.DateTime)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime Date { get; set; } = DateTime.Now;
    }

    public class Experience
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Le titre est obligatoire.")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Le nom de l'entreprise est obligatoire.")]
        public string Company { get; set; }

        public string Location { get; set; }

        [Required(ErrorMessage = "La date de début est obligatoire.")]
        public DateTime From { get; set; }

        public DateTime? To {get; set; }

        public bool Current {get; set; } = false; 

        public string Description { get; set; }
    }

    public class Education
    {
        public int Id { get; set; } // clé primaire pour l'éducation

        [Required]
        public string School { get; set; }

        [Required]
        public string Degree { get; set; }

        [Required]
        public string FieldOfStudy { get; set; }

        [Required]
        public DateTime From { get; set; }

        public DateTime? To { get; set; }
        public bool Current { get; set; } = false;
        public string Description { get; set; }
    }

    public class SocialLinks
    {
        [Key]
        public int Id { get; set; }
        
        [Url(ErrorMessage = "L'URL YouTube n'est pas valide.")]
        public string YouTube { get; set; }

        [Url(ErrorMessage = "L'URL Twitter n'est pas vailde.")]
        public string Twitter { get; set; }

        [Url(ErrorMessage = "L'URL Facebook n'est pas vailde.")]
        public string Facebook { get; set; }

        [Url(ErrorMessage = "L'URL LinkedIn n'est pas vailde.")]
        public string LinkedIn { get; set; }

        [Url(ErrorMessage = "L'URL Instagram n'est pas valide.")]
        public string Instagram { get; set; }
    }
}