using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ultils;

namespace Entity
{
    public class BoardGames
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int NumberOfPlayers { get; set; }    
        public GamePlay GamePlay { get; set; }
        public string Description { get; set; }
        public decimal? PriceSell { get; set; }
        public decimal? PriceRent { get; set; }

        public int OwnerId { get; set; }
        public UserAccount Owner { get; set; }
    }
}
