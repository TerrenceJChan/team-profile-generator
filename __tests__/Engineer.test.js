const Engineer = require('../lib/Engineer');

test('Is an Engineer object created?', () => {
    const engineer = new Engineer();
    expect(engineer);
});

test('Can Engineer name be set?', () => {
    const employeeName = 'András Arató';
    const engineer = new Engineer(employeeName);
    expect(engineer.employeeName).toBe(employeeName);
});

test('Can Engineer ID be set?', () => {
    const id = '07111945';
    const engineer = new Engineer('András Arató', id);
    expect(engineer.id).toBe(id);
});

test('Can Engineer email be set?', () => {
    const email = 'hidethepainharold@memeology.com';
    const engineer = new Engineer('András Arató', '07111945', email);
    expect(engineer.email).toBe(email);
});

test('Does getName() return the engineer\'s name?', () => {
    const engineer = new Engineer('András Arató', '07111945', 'hidethepainharold@memeology.com');
    expect(engineer.getName()).toBe('András Arató');
});

test('Does getId() return the engineer\'s ID?', () => {
    const engineer = new Engineer('András Arató', '07111945', 'hidethepainharold@memeology.com');
    expect(engineer.getId()).toBe('07111945');
});

test('Does getEmail() the engineer\'s email?', () => {
    const engineer = new Engineer('András Arató', '07111945', 'hidethepainharold@memeology.com');
    expect(engineer.getEmail()).toBe('hidethepainharold@memeology.com');
});

test('Does getRole() return the engineer\'s role?', () => {
    const engineer = new Engineer('András Arató', '07111945', 'hidethepainharold@memeology.com');
    expect(engineer.getRole()).toBe('Engineer');
});

test('Does getGithub() return the engineer\'s GitHub username?', () => {
    const engineer = new Engineer('András Arató', '07111945', 'hidethepainharold@memeology.com', 'haroldGit');
    expect(engineer.getGithub()).toBe('haroldGit');
});

