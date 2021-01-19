using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scoutsOfDniproSite.Models
{
    public class Post
    {
        public long Id { get; set; }
        public long WriterId { get; set; }
        public string Title { get; set; }
        public string ShortText { get; set; }
        public string Text { get; set; }
    }
}
