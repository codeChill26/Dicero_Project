using BLL.DTO.Users;
using DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BLL.InterfaceService
{
    public interface IUserService
    {
        Task<List<UserResponseDTO>> GetAllAsync();
        Task<UserResponseDTO?> GetByIdAsync(int id);

    }
}
