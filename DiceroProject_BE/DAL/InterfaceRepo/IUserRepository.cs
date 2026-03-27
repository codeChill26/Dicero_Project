using DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.InterfaceRepo
{
    public interface IUserRepository
    {
        Task AddUserAsync(UserAccount user);
        Task<List<UserAccount>> GetAllUsersAsync();
        Task<UserAccount?> GetUserByIdAsync(int id);
        Task UpdateUserAsync(UserAccount user);
        Task DeleteUserAsync(int id);
        Task<UserAccount?> GetUserByEmailAsync(string email);
    }
}