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
                var key = rule.Key.ToLower();
                var value = rule.Value.ToLower();
                if (key == player1Move && value == player2Move)
                {
                    return 1;
                }
                if (key == player2Move && value == player1Move)
                {
                    return 2;
                }
            }

            return 0;
        }
    }
}
