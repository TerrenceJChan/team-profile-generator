const Employee = require('../lib/Employee');

test('Is an Employee object created?', () => {
    const employee = new Employee();
    expect(employee);
});

test('Can Employee name be set?', () => {
    const employeeName = 'Peter Gibbons';
    const employee = new Employee(employeeName);
    expect(employee.employeeName).toBe(employeeName);
});

test('Can Employee ID be set?', () => {
    const id = '02191999';
    const employee = new Employee('MPeter Gibbons', id);
    expect(employee.id).toBe(id);
});

test('Can Employee email be set?', () => {
    const email = 'peter.gibbons@initech.com';
    const employee = new Employee('Peter Gibbons', '02191999', email);
    expect(employee.email).toBe(email);
});

test('Does getName() return the employee\'s name?', () => {
    const employee = new Employee('Peter Gibbons', '02191999', 'peter.gibbons@initech.com');
    expect(employee.getName()).toBe('Peter Gibbons');
});

test('Does getId() return the employee\'s ID?', () => {
    const employee = new Employee('Peter Gibbons', '02191999', 'peter.gibbons@initech.com');
    expect(employee.getId()).toBe('02191999');
});

test('Does getEmail() the employee\'s email?', () => {
    const employee = new Employee('Peter Gibbons', '02191999', 'peter.gibbons@initech.com');
    expect(employee.getEmail()).toBe('peter.gibbons@initech.com');
});

test('Does getRole() return the employee\'s role?', () => {
    const employee = new Employee('Peter Gibbons', '02191999', 'peter.gibbons@initech.com');
    expect(employee.getRole()).toBe('Employee');
});