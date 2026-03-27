using AutoMapper;
using BLL.DTO.Boardgames;
using BLL.InterfaceService;
using DAL.Entities;
using DAL.InterfaceRepo;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ultils;

namespace BLL.Services
{
    public class BoardGameService : IBoardGameService
    {
        private readonly IBoardGameRepository _boardGameRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public BoardGameService(
            IBoardGameRepository boardGameRepository,
            IUserRepository userRepository,
            IMapper mapper)
        {
            _boardGameRepository = boardGameRepository;
            _userRepository = userRepository;
            _mapper = mapper;
        }

        // 🔥 CREATE
        public async Task CreateBoardGameAsync(BoardGameCreateDTO dto, int userId)
        {
            if (string.IsNullOrWhiteSpace(dto.Title))
                throw new Exception("Title is required");

            if (dto.NumberOfPlayers <= 0)
                throw new Exception("Number of players must be greater than 0");

            if (dto.PriceSell.HasValue && dto.PriceSell < 0)
                throw new Exception("PriceSell cannot be negative");

            if (dto.PriceRent.HasValue && dto.PriceRent < 0)
                throw new Exception("PriceRent cannot be negative");

            if (!Enum.IsDefined(typeof(GamePlay), dto.GamePlay))
                throw new Exception("Invalid GamePlay type");

            // 🔥 lấy owner từ token (không từ client)
            var user = await _userRepository.GetUserByIdAsync(userId);
            if (user == null)
                throw new Exception("User not found");

            var entity = _mapper.Map<BoardGames>(dto);
            entity.OwnerId = userId;

            await _boardGameRepository.AddBoardGameAsync(entity);
        }

        // 🔥 GET ALL
        public async Task<List<BoardGameResponseDTO>> GetAllBoardGamesAsync()
        {
            var data = await _boardGameRepository.GetAllBoardGamesAsync();
            return _mapper.Map<List<BoardGameResponseDTO>>(data);
        }

        // 🔥 GET BY ID
        public async Task<BoardGameResponseDTO?> GetBoardGameByIdAsync(int id)
        {
            if (id <= 0)
                throw new Exception("Invalid id");

            var entity = await _boardGameRepository.GetBoardGameByIdAsync(id);

            return entity == null ? null : _mapper.Map<BoardGameResponseDTO>(entity);
        }

        // 🔥 UPDATE
        public async Task UpdateBoardGameAsync(int id, BoardgameUpdateDTO dto, int userId)
        {
            var existing = await _boardGameRepository.GetBoardGameByIdAsync(id);

            if (existing == null)
                throw new Exception("BoardGame not found");

            // 🔥 check owner (security)
            if (existing.OwnerId != userId)
                throw new Exception("You are not owner");

            // validate
            if (string.IsNullOrWhiteSpace(dto.Title))
                throw new Exception("Title is required");

            _mapper.Map(dto, existing);

            await _boardGameRepository.UpdateBoardGameAsync(existing);
        }

        // 🔥 DELETE
        public async Task DeleteBoardGameAsync(int id, int userId)
        {
            var existing = await _boardGameRepository.GetBoardGameByIdAsync(id);

            if (existing == null)
                throw new Exception("BoardGame not found");

            if (existing.OwnerId != userId)
                throw new Exception("You are not owner");

            await _boardGameRepository.DeleteBoardGameAsync(id);
        }
    }
}
