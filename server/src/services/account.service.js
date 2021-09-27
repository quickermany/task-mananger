const db = require("../models");
const Accounts = db.Accounts;

findAll = async () => {
    return Accounts.findAll();
}

module.exports = {
    findAll : findAll
}
