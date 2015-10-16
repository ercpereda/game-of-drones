using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoD.Domain
{
    public class GameScore
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public Player Player { get; set; }
        public Game Game { get; set; }
    }
}
