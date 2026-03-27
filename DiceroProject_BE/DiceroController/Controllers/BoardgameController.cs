using BLL.DTO.Boardgames;
using BLL.InterfaceService;
using DAL.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DiceroWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardGameController : ControllerBase
    {
        private readonly IBoardGameService _boardGameService;

        public BoardGameController(IBoardGameService boardGameService)
        {
            _boardGameService = boardGameService;
        }

        // 🔥 GET ALL
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var games = await _boardGameService.GetAllBoardGamesAsync();
            return Ok(games);
        }

        // 🔥 GET BY ID
        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var game = await _boardGameService.GetBoardGameByIdAsync(id);

            if (game == null)
                return NotFound("BoardGame not found");

            return Ok(game);
        }

        // 🔥 CREATE
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create(BoardGameCreateDTO dto)
        {
            var userId = GetUserId();

            await _boardGameService.CreateBoardGameAsync(dto, userId);

            return Ok("Created successfully");
        }

        // 🔥 UPDATE
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, BoardgameUpdateDTO dto)
        {
            var userId = GetUserId();

            await _boardGameService.UpdateBoardGameAsync(id, dto, userId);

            return Ok("Updated successfully");
        }

        // 🔥 DELETE
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var userId = GetUserId();

            await _boardGameService.DeleteBoardGameAsync(id, userId);

            return Ok("Deleted successfully");
        }

        // 🔥 HELPER: lấy userId từ JWT
        private int GetUserId()
        {
            return int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        }
    }
}