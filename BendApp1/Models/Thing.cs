namespace BendApp1.Models;
public class Thing
{
    public int id { get; set; }
    public int areaId { get; set; }
    public int? joinedWith { get; set; }
    public string sku { get; set; }
    public string defaultSku { get; set; }
    public string status { get; set; }
    public string countActive { get; set; }
}
