var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["FACULTY"] = 1] = "FACULTY";
    Role[Role["MANAGER"] = 2] = "MANAGER";
    Role[Role["USER"] = 3] = "USER";
})(Role || (Role = {}));
console.log(Role);
console.log(Role.FACULTY);
var Member;
(function (Member) {
    Member[Member["teacher"] = 0] = "teacher";
    Member[Member["madam"] = 1] = "madam";
    Member[Member["sir"] = 2] = "sir";
})(Member || (Member = {}));
console.log(Member);
