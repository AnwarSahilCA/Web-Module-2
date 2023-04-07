var Employee = /** @class */ (function () {
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    // }
    Employee.prototype.getEmpno = function () {
        return this.empno;
    };
    Employee.prototype.getEname = function () {
        return this.ename;
    };
    Employee.prototype.getSal = function () {
        return this.sal;
    };
    Employee.prototype.getAttendance = function () {
        return this.attendance;
    };
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
// var emp=new Employee();
//     var emp1=new Employee();
//     emp1.empno=102;
//     var emp2=new Employee();
var emp = new Employee(1, 'abc', 3000, 20);
var emp1 = new Employee(2, 'bbc', 2000, 30);
var emp2 = new Employee(3, 'cde', 3500, 25);
var emparray = [emp, emp1, emp2];
emp.print();
emp1.print();
emp2.print();
emparray.forEach(function (emplo) {
    console.log(emplo);
});
