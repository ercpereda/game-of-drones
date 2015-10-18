using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoD.Domain;

namespace GoD.Data
{
    public class Repository : IRepository
    {
        private GoDContext context = new GoDContext();

        public RuleSet GetRuleSet(int id)
        {
            return context.RuleSets.FirstOrDefault(r => r.Id == id);
        }
        
        public RuleSet GetRuleSet(string name)
        {
            return context.RuleSets.FirstOrDefault(r => String.Equals(r.Name, name, StringComparison.CurrentCultureIgnoreCase));
        }

        public IEnumerable<RuleSet> Rules
        {
            get { return context.RuleSets; }
        }

        public void AddGame(Game game)
        {
            context.Games.Add(game);
        }

        public Player GetPlayer(string name)
        {
            return context.Players.FirstOrDefault(p => p.Name.ToLower() == name.ToLower());
        }

        public void AddPlayer(Player player)
        {
            context.Players.Add(player);
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }
    }
}
