using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace scoutsOfDniproSite.Models
{
    public class User
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ForestName { get; set; }
        public string Password { get; set; }
        public int SiteRoleId { get; set; }
        public string JWTToken { get; set; }
        public string HomeAdress { get; set; }
        public string School { get; set; }
        public int Class { get; set; }
        public string PhoneNumber { get; set; }
        public string Passport { get; set; }

        public string LastSignIn { get; set; }
        public string LastEvent { get; set; }
        public string TelegramId { get; set; }
    }
}
