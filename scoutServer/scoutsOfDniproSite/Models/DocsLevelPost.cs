using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scoutsOfDniproSite.Models
{
    public class docslevelpost
    {
        public long Id { get; set; }
        public long DocsLevelId { get; set; }
        public long WriterId { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
    }
}
