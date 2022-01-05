// used for named constants
// used for related named constants
// it has an associated numeric values starts from 0 index
// e.g. for Month enum 
enum Week{
    Monday,
    Tuesday,
    Wesnday,
    Thursday,
    Friday,
    Saturday,
    Sunday = -3
};
// lets try to access it via enum name and with its numeric value
console.log("Day of a Week => "+Week.Friday);// IT RETURNS 4 because 4 is the fifth element of enum Week 
// console.log("All enum values : "+Week);// it displays [object Object], 
console.log(Week);