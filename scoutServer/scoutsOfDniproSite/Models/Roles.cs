using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scoutsOfDniproSite.Models
{
    public class Roles
    {
        public int Id { get; set; }
        public string Name { get; set; }


        public bool CanAcceptUsers { get; set; }
        public bool CanManageEvent { get; set; }
        public bool IsAdmin { get; set; }
        public bool CanSetSkill { get; set; }
        public bool CanSetBadge { get; set; }
        public bool CanSetScoutMinimum { get; set; }
        public bool CanEditUsers { get; set; }
    }
}
