using DAL.Entities;
using DAL.InterfaceRepo;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ultils; 

namespace DAL.Repositories
{
    public class BoardGameRepository : IBoardGameRepository
    {
        private readonly DiceroDBContext _context;

        public BoardGameRepository(DiceroDBContext context)
        {
            _context = context;
        }

        // Create
        public async Task AddBoardGameAsync(BoardGames boardGame)
        {
            _context.BoardGames.Add(boardGame);
            await _context.SaveChangesAsync();
        }

        // Read (Get All)
        public async Task<List<BoardGames>> GetAllBoardGamesAsync()
        {
            return await _context.BoardGames
                                 .Include(b => b.Owner)
                                 .ToListAsync();
        }

        // Read (Get by Id)
        public async Task<BoardGames?> GetBoardGameByIdAsync(int id)
        {
            return await _context.BoardGames
                                 .Include(b => b.Owner)
                                 .FirstOrDefaultAsync(b => b.Id == id);
        }

        // Read (Get by Owner)
        public async Task<List<BoardGames>> GetByOwnerIdAsync(int ownerId)
        {
            return await _context.BoardGames
                                 .Where(b => b.OwnerId == ownerId)
                                 .ToListAsync();
        }

        // Update
        public async Task UpdateBoardGameAsync(BoardGames boardGame)
        {
            _context.BoardGames.Update(boardGame);
            await _context.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteBoardGameAsync(int id)
        {
            var boardGame = await _context.BoardGames.FindAsync(id);
            if (boardGame != null)
            {
                _context.BoardGames.Remove(boardGame);
                await _context.SaveChangesAsync();
            }
        }
    }
}