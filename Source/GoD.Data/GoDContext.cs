using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoD.Domain;

namespace GoD.Data
{
    public class GoDContext : DbContext
    {
        public GoDContext()
            : base("DefaultConnection")
        {}

        public DbSet<Player> Players { get; set; }
        public DbSet<Game> Games { get; set; }
    }
}
