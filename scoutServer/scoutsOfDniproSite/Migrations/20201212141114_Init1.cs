using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace scoutsOfDniproSite.Migrations
{
    public partial class Init1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "docslevelposts",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DocsLevelId = table.Column<long>(nullable: false),
                    WriterId = table.Column<long>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_docslevelposts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "docslevels",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_docslevels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "events",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_events", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "posts",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    WriterId = table.Column<long>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    ShortText = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_posts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "roles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    CanAcceptUsers = table.Column<bool>(nullable: false),
                    CanManageEvent = table.Column<bool>(nullable: false),
                    IsAdmin = table.Column<bool>(nullable: false),
                    CanSetSkill = table.Column<bool>(nullable: false),
                    CanSetBadge = table.Column<bool>(nullable: false),
                    CanSetScoutMinimum = table.Column<bool>(nullable: false),
                    CanEditUsers = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserName = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    ForestName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    SiteRoleId = table.Column<int>(nullable: false),
                    JWTToken = table.Column<string>(nullable: true),
                    HomeAdress = table.Column<string>(nullable: true),
                    School = table.Column<string>(nullable: true),
                    Class = table.Column<int>(nullable: false),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Passport = table.Column<string>(nullable: true),
                    LastSignIn = table.Column<string>(nullable: true),
                    LastEvent = table.Column<string>(nullable: true),
                    TelegramId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "userscoutminimums",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false),
                    iScout1 = table.Column<bool>(nullable: false),
                    iScout2 = table.Column<bool>(nullable: false),
                    iScout3 = table.Column<bool>(nullable: false),
                    iScout4 = table.Column<bool>(nullable: false),
                    iScout5 = table.Column<bool>(nullable: false),
                    iScout6 = table.Column<bool>(nullable: false),
                    iScout7 = table.Column<bool>(nullable: false),
                    iScout8 = table.Column<bool>(nullable: false),
                    iScout9 = table.Column<bool>(nullable: false),
                    iScout10 = table.Column<bool>(nullable: false),
                    iScout11 = table.Column<bool>(nullable: false),
                    iScout12 = table.Column<bool>(nullable: false),
                    iScout13 = table.Column<bool>(nullable: false),
                    natureLife1 = table.Column<bool>(nullable: false),
                    natureLife2 = table.Column<bool>(nullable: false),
                    natureLife3 = table.Column<bool>(nullable: false),
                    natureLife4 = table.Column<bool>(nullable: false),
                    natureLife5 = table.Column<bool>(nullable: false),
                    natureLife6 = table.Column<bool>(nullable: false),
                    natureLife7 = table.Column<bool>(nullable: false),
                    natureLife8 = table.Column<bool>(nullable: false),
                    natureLife9 = table.Column<bool>(nullable: false),
                    natureLife10 = table.Column<bool>(nullable: false),
                    natureLife11 = table.Column<bool>(nullable: false),
                    natureLife12 = table.Column<bool>(nullable: false),
                    natureLife13 = table.Column<bool>(nullable: false),
                    natureLife14 = table.Column<bool>(nullable: false),
                    natureLife15 = table.Column<bool>(nullable: false),
                    natureLife16 = table.Column<bool>(nullable: false),
                    lifeInSociety1 = table.Column<bool>(nullable: false),
                    lifeInSociety2 = table.Column<bool>(nullable: false),
                    lifeInSociety3 = table.Column<bool>(nullable: false),
                    lifeInSociety4 = table.Column<bool>(nullable: false),
                    lifeInSociety5 = table.Column<bool>(nullable: false),
                    lifeInSociety6 = table.Column<bool>(nullable: false),
                    lifeInSociety7 = table.Column<bool>(nullable: false),
                    lifeInSociety8 = table.Column<bool>(nullable: false),
                    iGood1 = table.Column<bool>(nullable: false),
                    iGood2 = table.Column<bool>(nullable: false),
                    iGood3 = table.Column<bool>(nullable: false),
                    iGood4 = table.Column<bool>(nullable: false),
                    iGood5 = table.Column<bool>(nullable: false),
                    iGood6 = table.Column<bool>(nullable: false),
                    iGood7 = table.Column<bool>(nullable: false),
                    iGood8 = table.Column<bool>(nullable: false),
                    iGood9 = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userscoutminimums", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "usersrequests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    ForestName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_usersrequests", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "docslevelposts");

            migrationBuilder.DropTable(
                name: "docslevels");

            migrationBuilder.DropTable(
                name: "events");

            migrationBuilder.DropTable(
                name: "posts");

            migrationBuilder.DropTable(
                name: "roles");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "userscoutminimums");

            migrationBuilder.DropTable(
                name: "usersrequests");
        }
    }
}
