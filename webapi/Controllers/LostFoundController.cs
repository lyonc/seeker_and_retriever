namespace Clsmap.SeekerAndRetriever.Controllers
{
    using System;
    using System.Collections.Generic;

    using Microsoft.AspNetCore.Mvc;

    using Clsmap.SeekerAndRetriever.Models;

    [Route("api/[controller]")]
    public class LostFoundController : ControllerBase
    {
        public static IEnumerable<ILost> _losts = new[]
        {
            new Lost { Id = Guid.NewGuid(), Seeker = new Seeker(), Foundings = null, Status = StatusFactory.Create("created", new SystemOperator(), "") },
        };

        [HttpGet("[action]")]
        public IEnumerable<ILost> All()
        {
            return _losts;
        }
    }
}