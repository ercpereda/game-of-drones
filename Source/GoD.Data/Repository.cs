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

        public RuleSet GetRuleSet(string name)
        {
            return context.RuleSets.FirstOrDefault(r => r.Name == name);
        }

        public IEnumerable<RuleSet> Rules
        {
            get { return context.RuleSets; }
        }
    }
}
