using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace GoD.Domain
{
    public class Game
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }        
        public Player Player1 { get; set; }        
        public Player Player2 { get; set; }
        public Player Winner { get; set; }
    }
}
