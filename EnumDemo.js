// used for named constants
// used for related named constants
// it has an associated numeric values starts from 0 index
// e.g. for Month enum 
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wesnday"] = 2] = "Wesnday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = -3] = "Sunday";
})(Week || (Week = {}));
;
// lets try to access it via enum name and with its numeric value
console.log("Day of a Week => " + Week.Friday); // IT RETURNS 4 because 4 is the fifth element of enum Week 
// console.log("All enum values : "+Week);// it displays [object Object], 
console.log(Week);
