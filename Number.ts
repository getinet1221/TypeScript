// Number Data type
// Long number for numeric data type and bigint for long number
// there is decimal, octal, hexadecimal numberic representation
let salary = 10500.3;
console.log("salary " +salary);// displays 10500.3
// binary number represenation
let bin = 0b1000;
console.log(bin);// it means 8 in decimal numeric system
let Bin = 0B1000;
console.log("Using capital B displays same result : "+Bin);// it means 8 in decimal numeric system
// octal number represenation
// it uses o instead of b/B for octa numberic system
let on = 0O1070;
console.log("Octal Number : "+on);// it displays  8*8*8 +7*8 512 + 56 = 568
// Hexadecimal number represenation
let hex = 0X123;
console.log("Hexadecimal Number : "+hex);// is displays 16 * 16 + 2 * 6 + 3 * 1 = 291
// Big integers are numbers larger than 2 the power of 53 -1 and ends with the letter n in typescript
// let bigN  = 1212121212121212121212121212n;
// let bigN1:bigint = 9007199254740991n;
// console.log("Big numbner " +bigN);
// console.log("Big int will be : "+bigN1);
// let big: bigint = 12111n;
// console.log("bigint  : "+big);
// 