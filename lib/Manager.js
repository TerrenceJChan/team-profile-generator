const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;