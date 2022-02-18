const Router = require('express')
const authController = require('./authController')
const {check} = require('express-validator')
const authMidleware = require('./midleware/authMidleware')
const roleMidleware = require('./midleware/roleMidleware')

const authRouter = new Router()

authRouter.post('/registration', [
    check('username', "user name cant be empty").notEmpty(),
    check('password', "password  4 to 10").isLength({min: 4, max: 10}),
], authController.registration)
authRouter.post('/login', authController.login)
authRouter.get('/users', roleMidleware(["USER"]),  authController.getUsers)

module.exports = authRouter
