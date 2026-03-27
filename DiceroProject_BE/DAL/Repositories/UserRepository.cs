using DAL.Entities;
using DAL.InterfaceRepo;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DiceroDBContext _context;

        public UserRepository(DiceroDBContext context)
        {
            _context = context;
        }

        // Create
        public async Task AddUserAsync(UserAccount user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }

        // Read (Get All)
        public async Task<List<UserAccount>> GetAllUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        // Read (Get by Id)
        public async Task<UserAccount?> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        // Read (Get by Email) → dùng cho login sau này
        public async Task<UserAccount?> GetUserByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        // Update
        public async Task UpdateUserAsync(UserAccount user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }
    }
}