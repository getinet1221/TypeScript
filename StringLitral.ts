// string literal allows us to enable the string to accept a specific type
// for example
let click: "Click";
console.log("Only valid for click alone"+click);
//click = "Double Click";// it generates an error 
click="Click";
console.log(click);
var mouseEvent: "Click" | "DoubleClick" | "MouseHover"|"MouseDown";
mouseEvent = 'DoubleClick';
mouseEvent = "Click";
mouseEvent = "MouseHover";
mouseEvent = "MouseLeave";// which is compile time error, right?
console.log(mouseEvent);