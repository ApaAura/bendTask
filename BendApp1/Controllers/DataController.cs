using BendApp1.Models;
using BendApp1.Services;
using Microsoft.AspNetCore.Mvc;

namespace BendApp1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DataController : ControllerBase
    {
        private readonly DataService _dataService;
        public DataController(DataService data)
        {
            _dataService = data;
        }
        [HttpGet]
        [Route("GetAreas")]
        public Task<List<Area>> GetAreas()
        {
            return Task.FromResult(_dataService.GetAreas());
        }
        [HttpGet]
        [Route("GetThings")]
        public Task<List<Thing>> GetThings()
        {
            return Task.FromResult(_dataService.GetThings());
        }
    }
}
