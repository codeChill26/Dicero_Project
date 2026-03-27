using AutoMapper;
using BLL.DTO.Boardgames;
using DAL.Entities;

namespace BLL.Mapping
{
    public class BoardGameProfile : Profile
    {
        public BoardGameProfile()
        {
            // Map từ CreateDTO sang Entity
            CreateMap<BoardGameCreateDTO, BoardGames>();

            // Map từ Entity sang ResponseDTO
            CreateMap<BoardGames, BoardGameResponseDTO>()
                .ForMember(dest => dest.OwnerName, 
                           opt => opt.MapFrom(src => src.Owner.FullName));
        }
    }
}
