using System.Collections.Generic;
using GoD.Domain;

namespace GoD.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<GoDContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(GoD.Data.GoDContext context)
        {
            var player1 = new Player
            {
                Name = "Player1",                
            };
            var player2 = new Player
            {
                Name = "Player2"
            };

            context.Players.Add(player1);
            context.Players.Add(player2);

            var game1 = new Game
            {
                Date = DateTime.Now.AddDays(1),
                Player1 = player1,
                Player2 = player2
            };
            var game2 = new Game
            {
                Date = DateTime.Now.AddDays(1).AddHours(1),
                Player1 = player1,
                Player2 = player2
            };

            context.Games.Add(game1);
            context.Games.Add(game2);
            
            player1.Scores.Add(new GameScore
            {
                Score = 3,
                Game = game1,
            });
            player1.Scores.Add(new GameScore
            {
                Score = 2,
                Game = game2
            });
            player2.Scores.Add(new GameScore
            {
                Score = 1,
                Game = game1,
            });
            player2.Scores.Add(new GameScore
            {
                Score = 3,
                Game = game2
            });

            var classicRules = new RuleSet
            {
                Name = "Classic",
                Rules = "[{\"Key\":\"Rock\",\"Value\":\"Scissors\"},{\"Key\":\"Scissors\",\"Value\":\"Papper\"},{\"Key\":\"Papper\",\"Value\":\"Rock\"}]"
            };

            context.RuleSets.Add(classicRules);

            context.SaveChanges();
        }
    }
}
