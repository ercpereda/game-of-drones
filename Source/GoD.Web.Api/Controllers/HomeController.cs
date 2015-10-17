using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GoD.Domain;

namespace GoD.Web.Api.Controllers
{
    public class HomeController : Controller
    {
        public HomeController(IRepository repository) { }

        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
