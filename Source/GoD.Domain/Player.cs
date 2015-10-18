using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoD.Domain
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<GameScore> Scores { get; set; }

        public Player()
        {
            Scores = new List<GameScore>();
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
