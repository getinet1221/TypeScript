// unlike java and c#, function overloading is a little bit different and let's see it here
function AddNumbers(a, b) {
    return a + b;
}
function ConcatinateStrings(a, b) {
    return a + " " + b;
}
console.log("Number Addation : " + AddNumbers(20, 40));
console.log("String concatination : " + ConcatinateStrings("Getinet", "Amare"));
// or we can change it into union types like below
function AddingNumbers(a, b) {
    if (typeof a === "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (AddingNumbers("string", "number") == "undefined") {
        console.error("Incorrect input " + a.toLocaleString());
    }
}
console.log("Test it here : " + AddingNumbers(12, "12"));
