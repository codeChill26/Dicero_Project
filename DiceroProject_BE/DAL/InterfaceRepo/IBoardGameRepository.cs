using DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.InterfaceRepo
{
    public interface IBoardGameRepository
    {
        Task AddBoardGameAsync(BoardGames boardGame);
        Task<List<BoardGames>> GetAllBoardGamesAsync();
        Task<BoardGames?> GetBoardGameByIdAsync(int id);
        Task UpdateBoardGameAsync(BoardGames boardGame);
        Task DeleteBoardGameAsync(int id);
    }
}