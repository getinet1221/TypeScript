function getFullName(person) {
    return "Your Full Name is this : ".concat(person.firstName, " ").concat(person.middleName);
}
//lets invoke it
var person = {
    firstName: "Getinet",
    middleName: "Amare"
};
console.log("Full Name : " + getFullName(person));
var User = /** @class */ (function () {
    function User(fName, mName) {
        this.fName = fName;
        this.mName = mName;
        this.fName = fName;
        this.mName = mName;
    }
    User.prototype.toJson = function () {
        return "".concat(JSON.stringify(this), " and its type will be : ").concat(typeof (JSON.stringify(this))); // convert it into JSON file
    };
    return User;
}());
// lets invoke it right here
var user = new User("Getinet", "Mekonnen");
console.log(user.toJson());
