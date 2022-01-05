// string literal allows us to enable the string to accept a specific type
// for example
var click;
console.log("Only valid for click alone" + click);
//click = "Double Click";// it generates an error 
click = "Click";
console.log(click);
var mouseEvent;
mouseEvent = 'DoubleClick';
mouseEvent = "Click";
mouseEvent = "MouseHover";
console.log(mouseEvent);
