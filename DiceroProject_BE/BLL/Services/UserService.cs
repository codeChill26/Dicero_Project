using AutoMapper;
using BLL.DTO.Users;
using BLL.InterfaceService;
using DAL.Entities;
using DAL.InterfaceRepo; // Namespace chứa Interface Repository
using Org.BouncyCastle.Crypto.Generators;
using System.Collections.Generic;
using System.Threading.Tasks;
using BCrypt.Net;
using Ultils;

namespace BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository repo, IMapper mapper)
        {
            _userRepository = repo;
            _mapper = mapper;
        }
        public async Task<List<UserResponseDTO>> GetAllAsync()
        {
            var users = await _userRepository.GetAllUsersAsync();
            return _mapper.Map<List<UserResponseDTO>>(users);
        }

        public async Task<UserResponseDTO?> GetByIdAsync(int id)
        {
            var user = await _userRepository.GetUserByIdAsync(id);
            return user == null ? null : _mapper.Map<UserResponseDTO>(user);
        }

    }
}