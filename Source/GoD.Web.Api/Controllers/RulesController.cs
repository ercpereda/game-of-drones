using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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

        public IHttpActionResult Post()
        {
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {

                    var postedFile = httpRequest.Files[file];
                    var fileContent = "";
                    using (var reader = new StreamReader(postedFile.InputStream))
                    {
                        fileContent = reader.ReadToEnd();
                    }

                    dynamic ruleSetJson = System.Web.Helpers.Json.Decode(fileContent);

                    string name;
                    var rules = new List<string>();
                    try
                    {
                        name = ruleSetJson.Name;

                        foreach (var rule in ruleSetJson.Rules)
                        {
                            var beats = new List<string>();
                            foreach (var beat in rule.beats)
                            {
                                beats.Add("\"" + beat + "\"");
                            }

                            rules.Add("{" + "\"name\": " + "\"" + rule.name + "\"," + "\"beats\": [" + string.Join(",", beats) + "]," + "\"img\": \"" + rule.img + "\"}");
                        }

                    }
                    catch (Exception)
                    {
                        return BadRequest("Invalid file format");
                    }

                    var ruleSet = _repository.GetRuleSet(name);
                    if (ruleSet == null)
                    {
                        ruleSet = new RuleSet
                        {
                            Name = name
                        };
                        _repository.AddRuleSet(ruleSet);
                    }
                    ruleSet.Rules = "[" + string.Join(",", rules) + "]";

                    _repository.SaveChanges();
                }

                return Ok();

            }

            return BadRequest();
        }
    }
}
