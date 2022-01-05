// function demo
var val = function GetOdd(value : number): string{
    if(value %2 != 0){
        return value+" Is Odd";
    }else{
        console.error("Which is not Odd");
    }
    console.info("Value will be : "+value.valueOf);
}
// console.log(val(13));
// we can rewrite the code in the following way
function getLength(name:string):number{
    return name.length;
}
console.log(getLength("bosena"));