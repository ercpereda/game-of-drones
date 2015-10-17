using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace God.Services
{
    public interface IReferee
    {
        int Decide(string player1Move, string player2Move, dynamic rules);
    }
}
