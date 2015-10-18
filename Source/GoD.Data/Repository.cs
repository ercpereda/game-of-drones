using System;
using System.Collections.Generic;
using System.Data.Entity;
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
            return context.RuleSets.FirstOrDefault(r => r.Name.ToLower() == name.ToLower());
        }

        public IEnumerable<RuleSet> Rules
        {
            get { return context.RuleSets; }
        }

        public void AddRuleSet(RuleSet ruleSet)
        {
            context.RuleSets.Add(ruleSet);
        }

        public void AddGame(Game game)
        {
            context.Games.Add(game);
        }

        public Player GetPlayer(string name)
        {
            return context.Players.FirstOrDefault(p => p.Name.ToLower() == name.ToLower());
        }

        public IEnumerable<Player> Players
        {
            get { return context.Players
                    .Include(p => p.Scores)
                    .Include(p => p.Scores.Select(s => s.Game.Winner)); }
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
