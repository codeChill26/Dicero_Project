using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO.Boardgames
{
    public class BoardGameResponseDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int NumberOfPlayers { get; set; }
        public int GamePlay { get; set; }
        public string Description { get; set; }
        public decimal? PriceSell { get; set; }
        public decimal? PriceRent { get; set; }

        public string OwnerName { get; set; }
    }
}
