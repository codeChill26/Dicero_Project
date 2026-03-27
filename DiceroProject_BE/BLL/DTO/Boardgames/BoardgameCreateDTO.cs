using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations; // Thêm namespace này
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ultils; // Để dùng Enum GamePlay

namespace BLL.DTO.Boardgames
{
    public class BoardGameCreateDTO
    {
        [Required(ErrorMessage = "Title is required.")]
        [StringLength(200, ErrorMessage = "Title cannot exceed 200 characters.")]
        public string Title { get; set; }

        [Range(1, 100, ErrorMessage = "Number of players must be between 1 and 100.")]
        public int NumberOfPlayers { get; set; }

        [Required(ErrorMessage = "GamePlay type is required.")]
        [EnumDataType(typeof(GamePlay), ErrorMessage = "Invalid GamePlay type.")]
        public GamePlay GamePlay { get; set; }

        public string Description { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "Selling price cannot be negative.")]
        public decimal? PriceSell { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "Rental price cannot be negative.")]
        public decimal? PriceRent { get; set; }

        [Required(ErrorMessage = "Owner ID is required.")]
        public int OwnerId { get; set; }
    }
}
