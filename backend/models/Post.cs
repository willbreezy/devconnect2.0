using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace backend.models
{
    public class Post
    {
        [key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; } // relation avec l'entité User

        [Required(ErrorMessage = "Le texte du post est obligatoire.")]
        public string Text { get; set; }

        public string Name { get; set; }

        public string Avatar { get; set; }

        public List<Like> Likes { get; set; } = new List<Like>();

        public List<Comment> Comments {get; set; } = new List<Comment>();

        [Required]
        public DateTime Date { get; set; } = DateTime.Now;
    }

    public class Like
    {
        [key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; } // Relation avec l'entité User
    }

    public class Comment
    {
        [key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set;} // Relation avec l'entité User

        [Required(ErrorMessage = "Le texte du commentaire est obligatoire.")]
        public string Text { get; set; }

        public string Name { get; set; }

        public string Avatar {get; set; }

        [Required]
        public DateTime Date { get; set; } = DateTime.Now;
    }
}