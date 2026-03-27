using AutoMapper;
using BLL.DTO.Users;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapping
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            // User
            CreateMap<UserCreateDTO, UserAccount>()
                .ForMember(dest => dest.Password,
                           opt => opt.Ignore());

            CreateMap<UserAccount, UserResponseDTO>();
        }
    }
}
