using Microsoft.AspNetCore.Mvc;
using StitchingMagic.Models;
using System.Diagnostics;

namespace StitchingMagic.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Catalog()
        {
            return View();
        }
        public IActionResult Appointment()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

       public IActionResult CallBack()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
