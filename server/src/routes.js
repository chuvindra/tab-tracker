const AuthenticationControllers = require('./controllers/AuthenticationControllers')

module.exports = (app) => {
    app.post('/register', AuthenticationControllers.register)
}