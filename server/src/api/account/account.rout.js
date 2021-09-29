const Account = require("./account.controller");
const router = require("express").Router();

module.exports = app => {
    router.get("/", Account.findAll);
    router.post("/", Account.create)

    app.use('/api/accounts', router);
}
