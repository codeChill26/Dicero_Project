using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ultils;

namespace BLL.DTO.Boardgames
{
    public class BoardgameUpdateDTO
    {
        [Required(ErrorMessage = "Title is required")]
        [StringLength(100, ErrorMessage = "Title max 100 characters")]
        public string Title { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "NumberOfPlayers must be greater than 0")]
        public int NumberOfPlayers { get; set; }

        [Required(ErrorMessage = "GamePlay is required")]
        public GamePlay GamePlay { get; set; }

        [StringLength(1000, ErrorMessage = "Description max 1000 characters")]
        public string? Description { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "PriceSell must be >= 0")]
        public decimal? PriceSell { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "PriceRent must be >= 0")]
        public decimal? PriceRent { get; set; }
    }
}
