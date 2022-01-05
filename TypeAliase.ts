// name the exsting type as we want
// example we can name a string to char
// e.g. type char = string
type char = string;
let message : char;
message = "Welcome to me";
console.log(typeof(message));
// for exaple for alphanumeric charatcters
type alphanumeric = string | number;
let alphaTest: alphanumeric;
alphaTest = "Bosena";
alphaTest = 12;
alphaTest = true;// cannot asign to alphanemeric
console.log("type of alphaTest : "+typeof(alphaTest));