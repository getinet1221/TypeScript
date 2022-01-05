// indefinite number of arguments as an array in typescript
// function fn(...rest: type[]) {
//     //...
//  }
// its syntax is this 
function IndefiniteDemo(...numbers : number[]):number{
    var total = 0;
    for(let i=0;i<numbers.length;i++){
        return total+=numbers[i];
    }
}
// lets call the indefinite function right here
console.log("Get total With one argument : "+IndefiniteDemo(12));
console.log("Get tota With two argument : "+IndefiniteDemo(10,20));
console.log("Get tota With three argument : "+IndefiniteDemo(30,40,50));
console.log("Get tota With four argument : "+IndefiniteDemo(100,200,300,400));
console.log("Get tota With five argument : "+IndefiniteDemo(500,600,700,800,900));