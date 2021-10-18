const db = require("../models");
const Accounts = db.Accounts;
const Tasks = db.Tasks;


findAll = async () => {
    return Accounts.findAll({
        attributes: ["firstName", "createdTask", "resolvedTask"],
        include: [{model: Tasks}]
    });
}

findByPk = async (id) => {
    return Accounts.findByPk(id, {
        attributes: ["firstName", "createdTask", "resolvedTask"],
        include: [{model: Tasks}]
    });
}

create = async (account) => {
    Accounts.create(account);
}

module.exports = {
    findAll: findAll,
    create: create,
    findByPk: findByPk
}
