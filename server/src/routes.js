const AuthenticationControllers = require('./controllers/AuthenticationControllers')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')

module.exports = (app) => {
    return app.post('/register',AuthenticationPolicy.register,AuthenticationControllers.register)
}