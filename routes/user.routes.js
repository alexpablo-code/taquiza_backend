const UserController = require('../controllers/user.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.post('/api/authenticated', authenticate, (req, res) => res.json({authenticated:true})  )
    app.post('/api/register', UserController.registerUser)
    app.post('/api/login', UserController.login)
    app.post('/api/logout', UserController.logout)
}