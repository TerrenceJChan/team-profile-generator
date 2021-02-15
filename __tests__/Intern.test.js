const Intern = require('../lib/Intern');

test('Is an Intern object created?', () => {
    const intern = new Intern();
    expect(intern);
});

test('Can Intern name be set?', () => {
    const employeeName = 'Terrence Chan';
    const intern = new Intern(employeeName);
    expect(intern.employeeName).toBe(employeeName);
});

test('Can Intern ID be set?', () => {
    const id = '01071997';
    const intern = new Intern('Terrence Chan', id);
    expect(intern.id).toBe(id);
});

test('Can Intern email be set?', () => {
    const email = 'developer@terrencejchan.com';
    const intern = new Intern('Terrence Chan', '01071997', email);
    expect(intern.email).toBe(email);
});

test('Does getName() return the intern\'s name?', () => {
    const intern = new Intern('Terrence Chan', '01071997', 'developer@terrencejchan.com');
    expect(intern.getName()).toBe('Terrence Chan');
});

test('Does getId() return the intern\'s ID?', () => {
    const intern = new Intern('Terrence Chan', '01071997', 'developer@terrencejchan.com');
    expect(intern.getId()).toBe('01071997');
});

test('Does getEmail() the intern\'s email?', () => {
    const intern = new Intern('Terrence Chan', '01071997', 'developer@terrencejchan.com');
    expect(intern.getEmail()).toBe('developer@terrencejchan.com');
});

test('Does getRole() return the intern\'s role?', () => {
    const intern = new Intern('Terrence Chan', '01071997', 'developer@terrencejchan.com');
    expect(intern.getRole()).toBe('Intern');
});

test('Does getSchool() return the intern\'s school?', () => {
    const intern = new Intern('Terrence Chan', '01071997', 'developer@terrencejchan.com', 'University of Waterloo');
    expect(intern.getSchool()).toBe('University of Waterloo');
});

