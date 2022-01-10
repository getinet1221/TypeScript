// interface demo in type script
// we use interface to sign contract and make a force implementation when we implement it 
// e.g. a demo using Person interface
// used to define contract between unrelated classes.
interface Person{
    firstName : string;
    middleName : string;
}
function getFullName(person: Person){
    return `Your Full Name is this : ${person.firstName} ${person.middleName}`;
}
//lets invoke it
let person ={
    firstName:"Getinet",
    middleName:"Amare"
};
console.log("Full Name : "+getFullName(person));


// lets create an interface which is unrealted to each other
interface Json{
    toJson():string;
}
class User implements Json {
    constructor(private fName , private mName){
        this.fName = fName;
        this.mName = mName;
    }
    toJson(){
        return `${JSON.stringify(this)} and its type will be : ${typeof(JSON.stringify(this))}`;// convert it into JSON file
    }
}
// lets invoke it right here
let user = new User("Getinet","Mekonnen");
console.log(user.toJson());