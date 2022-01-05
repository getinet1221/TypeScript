// array type
// can store same or different types together in typescript
var naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
naturalNumbers.forEach(function (value) {
    if (value % 2 == 0) {
        console.log(value);
    }
});
// we can add diffrent types to arrays like below
var nameAndAge = [28, "Getinet", 45, "Bosena"];
console.log("Name and Age = " + nameAndAge);
