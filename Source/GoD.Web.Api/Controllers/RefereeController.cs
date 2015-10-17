using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GoD.Domain;
using God.Services;

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

        public IHttpActionResult GetDecide(string player1Move, string player2Move, string rulesetName = "Classic")
        {
            var ruleset = _repository.GetRuleSet(rulesetName);
            if (ruleset == null)
                return BadRequest("The rule set no exists");

            player1Move = player1Move.ToLower();
            player2Move = player2Move.ToLower();

            dynamic rules = System.Web.Helpers.Json.Decode(ruleset.Rules);
            
            return Ok(_referee.Decide(player1Move, player2Move, rules));
        }
    }
}
