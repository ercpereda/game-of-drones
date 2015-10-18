using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GoD.Domain;

namespace GoD.Web.Api.Controllers
{
    [RoutePrefix("api/Players")]
    public class PlayersController : ApiController
    {
        private readonly IRepository _repository;

        public PlayersController(IRepository repository)
        {
            _repository = repository;
        }

        [Route("Ranking")]
        public IHttpActionResult GetRaking()
        {
            return Ok();
        }
    }
}
