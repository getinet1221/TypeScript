// default value functions
function getSalary(monthSalary:number, bonus = monthSalary * 0.5){
    if(monthSalary > 10000){
        return monthSalary + (0.5 + monthSalary);
    }
    return monthSalary;
}
console.log("Month salary : "+getSalary(12000));
console.log("Another monthly salary will be : "+getSalary(9000));