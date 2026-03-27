using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations; // Thêm namespace này
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO.Auth
{
    public class LoginRequestDTO
    {
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        public string Password { get; set; }
    }
}
