using BLL.DTO.Auth;
using BLL.DTO.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.InterfaceService
{
    public interface IAuthService
    {
        Task<AuthResponseDTO> LoginAsync(LoginRequestDTO request);
        Task<AuthResponseDTO> RegisterAsync(UserCreateDTO DTO);

        string GenerateToken(UserResponseDTO user);
    }
}
