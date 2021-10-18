const Account = require("./account.controller");
const router = require("express").Router();
const authorize = require("../../middleware/autorization")


    module.exports = app => {
    router.get("/",authorize(), Account.findAll);
    router.post("/", Account.create)
    router.get("/:id", Account.findByPk)

    app.use('/api/accounts', router);
}
