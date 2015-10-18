using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoD.Domain
{
    public class Player
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public IList<GameScore> Scores { get; set; }

        public Player()
        {
            Scores = new List<GameScore>();
        }

        public int GamesWins
        {
            get { return Scores.Count(s => s.Game.Winner.Name == Name); }
        }

        public int GamesLoses
        {
            get { return Scores.Count(s => s.Game.Winner.Name != Name); }
        }

        public void AddScore(int score, Game game)
        {            
            Scores.Add(new GameScore
            {
                Player = this,
                Game = game,
                Score = score
            });
        }        
    }
}
