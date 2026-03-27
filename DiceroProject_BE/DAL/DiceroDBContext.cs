using DAL.Entities;
using Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DiceroDBContext : DbContext
    {
        public DbSet<Entities.UserAccount> Users { get; set; }
        public DbSet<Entities.BoardGames> BoardGames { get; set; }
        public DiceroDBContext(DbContextOptions<DiceroDBContext> options)
        : base(options)
        {
        }

    }
}
