using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoD.Domain
{
    public interface IRepository
    {
        RuleSet GetRuleSet(string name);
        RuleSet GetRuleSet(int id);
        IEnumerable<RuleSet> Rules { get; }
        void AddRuleSet(RuleSet ruleSet);

        void AddGame(Game game);

        void AddPlayer(Player player);
        Player GetPlayer(string name);
        IEnumerable<Player> Players { get; } 
        
        void SaveChanges();
    }
}
