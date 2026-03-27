using AutoMapper;
using BLL.DTO.Auth;
using BLL.DTO.Users;
using BLL.InterfaceService;
using DAL.Entities;
using DAL.InterfaceRepo;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Ultils;

namespace BLL.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;

        public AuthService(IUserRepository repo, IMapper mapper, IConfiguration config)
        {
            _repo = repo;
            _mapper = mapper;
            _config = config;
        }

        // 🔥 REGISTER
        public async Task<AuthResponseDTO> RegisterAsync(UserCreateDTO DTO)
        {
            if (string.IsNullOrWhiteSpace(DTO.Email))
                throw new Exception("Email required");

            if (string.IsNullOrWhiteSpace(DTO.Password))
                throw new Exception("Password required");

            var exist = await _repo.GetUserByEmailAsync(DTO.Email);
            if (exist != null)
                throw new Exception("Email already exists");

            var user = _mapper.Map<UserAccount>(DTO);

            // 🔥 hash password
            user.Password = Auth.Hash(DTO.Password);

            await _repo.AddUserAsync(user);

            var userDTO = _mapper.Map<UserResponseDTO>(user);

            return new AuthResponseDTO
            {
                Token = "", // 🔥 Controller sẽ set
                User = userDTO
            };
        }

        // 🔥 LOGIN
        public async Task<AuthResponseDTO> LoginAsync(LoginRequestDTO request)
        {
            var user = await _repo.GetUserByEmailAsync(request.Email);

            if (user == null)
                throw new Exception("User not found");

            bool isValid = Auth.Verify(request.Password, user.Password);

            if (!isValid)
                throw new Exception("Wrong password");

            var userDTO = _mapper.Map<UserResponseDTO>(user);

            return new AuthResponseDTO
            {
                Token = "", // 🔥 Controller sẽ generate
                User = userDTO
            };
        }

        // 🔥 JWT GENERATE
        public string GenerateToken(UserResponseDTO user)
        {
            var key = _config["Jwt:Key"];

            var securityKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(key)
            );

            var creds = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email)
            };

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
