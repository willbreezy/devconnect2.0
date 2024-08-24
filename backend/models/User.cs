using System;
using System.ComponentModel.DataAnnotations;

namespace backend.models
{
    public class User 
    {
        [key] // clé primaire
        public int Id { get; set }

        [required(ErrorMessage = "Le nom est obligatoire.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "L'adresse e-mail est obligatoire.")]
        [EmailAddress(ErrorMessage = "L'adresse e-mail est invalide.")]
        [MaxLength(255)] // définit une longeur pour éviter les erreurs d'indexation dans la base de données
        public string Email { get; set; }

        [Required(ErrorMessage = "Le mot de passe est obligatoire.")]
        [MinLength(8, ErrorMessage = "Le mot de passe doit contenir au moins 8 caractères.")]
        public string Password { get; set; }

        public string Avatar { get; set; } // champ facultatif

        [Required] // permet de s'assurer qu'une date est enregistrée
        public DateTime Date { get; set; } = DateTime.Now; // définit la valeur par défaut à la date actuelle
    }
}