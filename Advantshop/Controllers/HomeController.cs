using Advantshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Advantshop.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            using (var myDb = new Model1())
            {

                var str = myDb.Category.ToList();

                return View(str);
            }
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}