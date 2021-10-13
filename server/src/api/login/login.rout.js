const Login = require("./login.controller")
const router = require("express").Router();

module.exports = app => {
    router.post('/', Login.create);

    app.use('/api/login', router);
}