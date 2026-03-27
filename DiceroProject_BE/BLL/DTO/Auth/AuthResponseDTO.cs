using BLL.DTO.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO.Auth
{
    public class AuthResponseDTO
    {
        public string Token { get; set; }
        public UserResponseDTO User { get; set; }
        public DateTime Expiration { get; set; }
    }
}
