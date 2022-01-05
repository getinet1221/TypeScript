// union type demo is this
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
function concatinateValues(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        // lets add them if it is numberic type
        return a + b;
    }
    if (typeof (a) == "string" && typeof (b) == "string") {
        return a + "" + b;
    }
    if (typeof (a) == 'boolean' && typeof (b) == "boolean") {
        // lets concatinate the two values, man
        return a + " " + b;
    }
    throw new Error("An error is occured here");
}
// lets demonestrate Union type rather than any type
function addNumString(a, b) {
    if (typeof (a) === "number" && typeof (b) == "number") {
        return a + b;
    }
    if (typeof (a) == "string" && typeof (b) === "string") {
        return a.concat(b);
    }
    else {
        throw new Error("Your input must be either string or number");
    }
}
// console.log("Test it, "+concatinateValues(23,45));
console.log("Test :" + addNumString("true", "false"));
console.log("Test :" + addNumString(12, 12));
