using BendApp1.Models;
using Newtonsoft.Json;
using System.IO;
namespace BendApp1.Services;
public class DataService
{
    public List<Area> GetAreas()
    {
        using StreamReader r = new StreamReader("areas.json");
        string json = r.ReadToEnd();
        var items = JsonConvert.DeserializeObject<List<Area>>(json);
        return items;
    }
    public List<Thing> GetThings()
    {
        using StreamReader r = new StreamReader("things.json");
        string json = r.ReadToEnd();
        var items = JsonConvert.DeserializeObject<List<Thing>>(json);
        return items;
    }
}
