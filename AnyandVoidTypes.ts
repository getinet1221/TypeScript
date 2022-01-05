// void and any type values
// any used to for an input from third party API and unknown user input
// void is used during returning nothing 
function testAny(name:any){
    return name;
}
function testVoid(name : void):void{
    return name;
}
console.log("Test any type : "+testAny("bosena fenthuan"));
console.log("Test it with number : "+testAny(1));
console.log("Void : "+testVoid(123));// an error because of void return type 
let nameandage = testVoid(1234); // an error because of void return type 
console.log(nameandage);