// never type is used to return nothing 
// demo for never type is this 
// we use it for functions always throws an error
function raiseError(message) {
    throw new Error(message);
}
var lop = function forEver() {
    while (true) {
        console.log("Always display");
    }
}; // 
// console.log(raiseError("gETINET AMAE"));
console.log("Always : " + lop);
while (true) {
    console.log("Test its continity");
}
