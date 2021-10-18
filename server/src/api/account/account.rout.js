const Account = require("./account.controller");
const router = require("express").Router();
// const authorize = require("../../middleware/autorization")
// authorize(),

    module.exports = app => {
    router.get("/", Account.findAll);
    router.post("/", Account.create)
    router.get("/:id", Account.findByPk)

    app.use('/api/accounts', router);
}
