const Employee = requires('./Employee.js');

class Manager extends Employee {
    constructor() {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getRole() {
        return 'Employee';
    }
};

module.exports = Manager;