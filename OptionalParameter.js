// optional parameters in functions
function multiplication(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
console.log("Take a look 1: " + multiplication(2, 3, 4));
console.log("Take a look 2: " + multiplication(3, 4));
