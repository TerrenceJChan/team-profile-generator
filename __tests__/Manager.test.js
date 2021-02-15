const Manager = require('../lib/Manager');

test('Is a Manager object created?', () => {
    const manager = new Manager();
    expect(manager);
});

test('Can Manager name be set?', () => {
    const employeeName = 'Super Karoshi';
    const manager = new Manager(employeeName);
    expect(manager.employeeName).toBe(employeeName);
});

test('Can Manager ID be set?', () => {
    const id = '44444444';
    const manager = new Manager('Super Karoshi', id);
    expect(manager.id).toBe(id);
});

test('Can Manager email be set?', () => {
    const email = 'super.karoshi@flashgame.com';
    const manager = new Manager('Super Karoshi', '44444444', email);
    expect(manager.email).toBe(email);
});

test('Does getName() return the manager\'s name?', () => {
    const manager = new Manager('Super Karoshi', '44444444', 'super.karoshi@flashgame.com');
    expect(manager.getName()).toBe('Super Karoshi');
});

test('Does getId() return the manager\'s ID?', () => {
    const manager = new Manager('Super Karoshi', '44444444', 'super.karoshi@flashgame.com');
    expect(manager.getId()).toBe('44444444');
});

test('Does getEmail() the manager\'s email?', () => {
    const manager = new Manager('Super Karoshi', '44444444', 'super.karoshi@flashgame.com');
    expect(manager.getEmail()).toBe('super.karoshi@flashgame.com');
});

test('Does getRole() return the manager\'s role?', () => {
    const manager = new Manager('Super Karoshi', '44444444', 'super.karoshi@flashgame.com');
    expect(manager.getRole()).toBe('Manager');
});

