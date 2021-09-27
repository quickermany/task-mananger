const Account = require("./account.contoroller");
const router = require("express").Router();

module.exports = app => {
    router.get("/", Account.findAll);

    app.use('/api/accounts', router);
}
