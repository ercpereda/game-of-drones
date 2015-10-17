using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace God.Services
{
    public class Referee : IReferee
    {
        public int Decide(string player1Move, string player2Move, dynamic rules)
        {
            foreach (var rule in rules)
            {
                var name = rule.name.ToLower();
                foreach (var beats in rule.beats)
                {
                    if (name == player1Move && beats == player2Move)
                        return 1;
                    if (name == player2Move && beats == player1Move)
                        return 2;
                }                
            }

            return 0;
        }
    }
}
