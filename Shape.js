var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class demo in typescript
var Shape = /** @class */ (function () {
    function Shape(nameOfShape, numberOfEdges) {
        this.nameOfShape = nameOfShape;
        this.numberOfEdges = numberOfEdges;
    }
    Shape.prototype.getDetailsOfShappe = function () {
        return "The name of shape is => ".concat(this.nameOfShape, " and has ").concat(this.numberOfEdges, " number of edges ");
    };
    return Shape;
}());
// getter and setter methods to access private fields and methods as well
var Person = /** @class */ (function () {
    function Person(_fName, _mName) {
        this._fName = _fName;
        this._mName = _mName;
        this._fName = _fName;
        this._mName = _mName;
    }
    Object.defineProperty(Person.prototype, "fName", {
        get: function () {
            if (!this._fName) {
                throw new Error("Please Provide first name, First name is required");
            }
            return this._fName;
        },
        set: function (_fName) {
            if (!_fName) {
                throw new Error("First Name is required");
            }
            this._fName = _fName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "mName", {
        get: function () {
            if (!this._mName) {
                throw new Error("Please Provide middle name, middle name is required");
            }
            return this._mName;
        },
        set: function (_mName) {
            if (!_mName) {
                throw new Error("Middle Name is required");
            }
            this._mName = _mName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getPersonDetails = function () {
        return "Employee Name : ".concat(this._fName).concat(this._mName);
    };
    return Person;
}());
// inheritance in typescript
// lets create Employee class inherits from Person super class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(_fName, _mName, _salary) {
        var _this = _super.call(this, _fName, _mName) || this;
        _this._salary = _salary;
        return _this;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee Details with salary is this :  ".concat(this.fName).concat(this.mName, "  ").concat(this._salary);
    };
    return Employee;
}(Person));
// let shape = new Shape("Square", 4);
// console.log(shape.getDetailsOfShappe());
// let person = new Person("Getinet", "Amare");
// person.fName = "Getinet Amare Mekonnen";
// console.log(person.fName);
// console.log(person.getPersonDetails());
// lets invoke the child class in her
var employee = new Employee("Bosena", "Fentahun", 12000);
console.log("Employee Name : " + employee.fName);
console.log(employee.getEmployeeDetails());
console.log("Person Details : " + employee.getPersonDetails());
