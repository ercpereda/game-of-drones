using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GoD.Domain;
using God.Services;
using GoD.Web.Api.Models;

namespace GoD.Web.Api.Controllers
{
    [RoutePrefix("api/Referee")]
    public class RefereeController : ApiController
    {
        private readonly IRepository _repository;
        private readonly IReferee _referee;

        public RefereeController(IRepository repository, IReferee referee)
        {
            _repository = repository;
            _referee = referee;
        }

        [Route("Decide")]
        public IHttpActionResult GetDecide(string player1Move, string player2Move, int rulesetId)
        {
            var ruleset = _repository.GetRuleSet(rulesetId);
            if (ruleset == null)
                return BadRequest("The rule set no exists");

            player1Move = player1Move.ToLower();
            player2Move = player2Move.ToLower();

            dynamic rules = System.Web.Helpers.Json.Decode(ruleset.Rules);

            return Ok(_referee.Decide(player1Move, player2Move, rules));
        }

        [Route("DeclareWinner")]
        public IHttpActionResult PostDeclareWinner(DeclareWinnerBindingModel data)
        {
            var player1 = _repository.GetPlayer(data.Player1Name);
            if (player1 == null)
            {
                player1 = new Player { Name = data.Player1Name };
                _repository.AddPlayer(player1);
            }

            var player2 = _repository.GetPlayer(data.Player2Name);
            if (player2 == null)
            {
                player2 = new Player { Name = data.Player2Name };
                _repository.AddPlayer(player2);
            }

            var game = new Game
            {
                Date = DateTime.Now,
                Player1 = player1,
                Player2 = player2,
                Winner = data.Player1Score > data.Player2Score ? player1 : player2
            };

            _repository.AddGame(game);

            player1.AddScore(data.Player1Score, game);
            player2.AddScore(data.Player2Score, game);

            _repository.SaveChanges();

            return Ok();
        }
    }
}
