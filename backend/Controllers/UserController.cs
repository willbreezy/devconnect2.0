using backend.data;
using backend.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DevConnectContext _context;
        private readonly IConfiguration _config;

        public UsersController(DevConnectContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        // POST : api/Users
        [HttpPost]
        public async Task<ActionResult> Register(UserDto userDto)
        {
            // Validation des données recues
            if (string.IsNullOrEmpty(userDto.Name))
            {
                return BadRequest(new
                {
                    errors = new[]
                {
                    new { msg = "Le nom est obligatoire" }
                }
                });
            }

            if (!new EmailAddressAttribute().IsValid(userDto.Email))
            {
                return BadRequest(new
                {
                    errors = new[]
                    {
                        new { msg = "Insérez une adresse e-mail valide" }
                    }
                });
            }

            if (userDto.Password.Length < 8)
            {
                return BadRequest(new
                {
                    errors = new[]
                    {
                        new { msg = "Insérez un mot de passe d'au moins 8 caractères" }
                    }
                });
            }

            try
            {
                var existingUser = await _context.Users.SingleOrDefaultAsync(u => u.Email == userDto.Email);

                if (existingUser != null )
                {
                    return BadRequest(new
                    {
                        errors = new[]
                        {
                            new { msg = "Cet utilisateur existe déjà" }
                        }
                    });
                }

                // Création de l'avatar gravatar
                var avatarUrl = $"https://www.gravatar.com/avatar/{MD5Hasher(userDto.Email.ToLower())}?s=200&r=pg&d=mm";

                var user = new User
                {
                    Name = userDto.Name,
                    Email = userDto.Email,
                    Avatar = avatarUrl,
                    Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password)
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                // Création du token JWT
                var tokenHandler = new JwtSecurityTokenHandler();
                var key =  Encoding.ASCII.GetBytes(_config["JwtSecret"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(5),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);

                return Ok(new { token = tokenHandler.WriteToken(token) });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, "Erreur au niveau du serveur");
            }
        }

        private static string MD5Hasher(string input)
        {
            using (var md5 = System.Security.Cryptography.MD5.Create())
            {
                var inputBytes = Encoding.ASCII.GetBytes(input);
                var hashBytes = md5.ComputeHash(inputBytes);
                return BitConverter.ToString(hashBytes).Replace("-",  "").ToLower();
            }
        }
    }

    public class UserDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}