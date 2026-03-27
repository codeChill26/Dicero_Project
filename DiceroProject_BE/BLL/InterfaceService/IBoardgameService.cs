using BLL.DTO.Boardgames;
using DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BLL.InterfaceService
{
    public interface IBoardGameService
    {
        Task CreateBoardGameAsync(BoardGameCreateDTO dto, int userId);
        Task<List<BoardGameResponseDTO>> GetAllBoardGamesAsync();
        Task<BoardGameResponseDTO?> GetBoardGameByIdAsync(int id);
        Task UpdateBoardGameAsync(int id, BoardgameUpdateDTO dto, int userId);
        Task DeleteBoardGameAsync(int id, int userId);
    }
}
