using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scoutsOfDniproSite.Models
{
    public class requestUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ForestName { get; set; }
    }
}
