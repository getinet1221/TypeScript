// array type
// can store same or different types together in typescript
let naturalNumbers:number[] = [1,2,3,4,5,6,7,8,9];
naturalNumbers.forEach(value =>{
    if(value %2 == 0){
         console.log(value);
    }   
});
// we can add diffrent types to arrays like below
let nameAndAge : (string | number)[] = [28,"Getinet",45,"Bosena"];
console.log("Name and Age = "+nameAndAge);
