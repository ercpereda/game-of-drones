using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GoD.Web.Api.Controllers
{
    [RoutePrefix("api/Referee")]
    public class RefereeController : ApiController
    {
        public IHttpActionResult GetDecide(string player1Move, string player2Move)
        {
            return Ok(1);
        }
    }
}
