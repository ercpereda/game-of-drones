using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GoD.Domain;

namespace GoD.Web.Api.Controllers
{
    [RoutePrefix("api/Rules")]
    public class RulesController : ApiController
    {
        private readonly IRepository _repository;

        public RulesController(IRepository repository)
        {
            _repository = repository;
        }

        public IHttpActionResult Get()
        {
            return Ok(_repository.Rules);
        }

        public IHttpActionResult Get(int id)
        {
            var rules = _repository.GetRuleSet(id);
            if (rules == null)
                return NotFound();

            return Ok(rules);
        }
    }
}
