using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace youhuo_api_mock.Controllers
{
    [Route("api/[controller]")]
    public class JobsController : Controller
    {
        public static Job[] Jobs = new[]
        {
            new Job { Id = 0, Title = "Programmer", Description = "" },
            new Job { Id = 1, Title = "Designer", Description = "" },
            new Job { Id = 2, Title = "DBA", Description = "" },
            new Job { Id = 3, Title = "Program Manager", Description = "" },
            new Job { Id = 4, Title = "Product Manager", Description = "" },
            new Job { Id = 5, Title = "Project Manager", Description = "" },
            new Job { Id = 6, Title = "CTO", Description = "" },
            new Job { Id = 7, Title = "CFO", Description = "" },
            new Job { Id = 8, Title = "CEO", Description = "" },
            new Job { Id = 9, Title = "UFO", Description = "" },
        };

        [HttpGet("[action]")]
        public IEnumerable<Job> All()
        {
            return Jobs;
        }

        [HttpGet("[action]")]
        public IEnumerable<Job> PublishedByMe()
        {
            var rng = new Random();
            return Enumerable.Range(1, 4).Select(index => Jobs[index]);
        }

        public class Job
        {
            public int Id { get; set; }

            public string Title { get; set; }

            public string Description { get; set; }
        }
    }
}