const login_auth = require('../routes/login-auth.js');
const validateLogin = require('./validateLogin')
test('validates that the email is correct', () => {
    expect(validateLogin("test@test.com", "password123")).toBe(true)
});