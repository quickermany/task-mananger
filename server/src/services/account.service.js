const db = require("../models");
const Accounts = db.Accounts;

findAll = async () => {
    return Accounts.findAll();
}

// findOne = async  () => {
//     return Accounts.findOne();
// }

create = async (account) =>{
    Accounts.create(account);
}

module.exports = {
    findAll : findAll,
    create : create
}
