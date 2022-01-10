// class demo in typescript
// tsc Shape.ts --target es5 use this command to compile with es5 version specifically otherwise it will generate an error 
class Shape{
    private nameOfShape
    private numberOfEdges:number;
    constructor(nameOfShape,numberOfEdges){
        this.nameOfShape = nameOfShape;
        this.numberOfEdges = numberOfEdges;
    }
    getDetailsOfShappe(){
        return `The name of shape is => ${this.nameOfShape} and has ${this.numberOfEdges} number of edges `;
    }
}
// getter and setter methods to access private fields and methods as well
class Person{
    constructor(private _fName:string, private _mName:string){
        this._fName = _fName;
        this._mName = _mName;
    }
    set fName(_fName:string){
        if(!_fName){
            throw new Error("First Name is required");
        }
        this._fName = _fName;
    }
    get fName(){
        if(!this._fName){
            throw new Error("Please Provide first name, First name is required");
        }
        return this._fName;
    }
    set mName(_mName:string){
        if(!_mName){
            throw new Error("Middle Name is required");
        }
        this._mName = _mName;
    }
    get mName(){
        if(!this._mName){
            throw new Error("Please Provide middle name, middle name is required");
        }
        return this._mName;
    }
    getPersonDetails(){
        return `Employee Name : ${this._fName}${this._mName}`;
    }
}
// inheritance in typescript
// lets create Employee class inherits from Person super class
class Employee extends Person{
    private _salary:number;
    constructor(_fName, _mName, _salary:number){
        super(_fName,_mName);
        this._salary = _salary;
    }
    getEmployeeDetails(){
        return `Employee Details with salary is this :  ${this.fName}${this.mName}  ${this._salary}`;
    }
}
// let shape = new Shape("Square", 4);
// console.log(shape.getDetailsOfShappe());
    // let person = new Person("Getinet", "Amare");
    // person.fName = "Getinet Amare Mekonnen";
    // console.log(person.fName);
    // console.log(person.getPersonDetails());
// lets invoke the child class in her
let employee = new Employee("Bosena" , "Fentahun", 12000);
console.log("Employee Name : "+employee.fName);
console.log(employee.getEmployeeDetails());
console.log("Person Details : "+employee.getPersonDetails());

