const db = require("../models");
const Accounts = db.Accounts;
const Tasks = db.Tasks;
const Languages = db.Languages;
const Themes = db.Themes;

findAll = async () => {
    return Accounts.findAll({
        attributes: ["firstName", "lastName", "createdTask", "resolvedTask"],
        include: [{model: Tasks}, {model: Languages}, {model: Themes}]
    });
}

findByPk = async (id) => {
    return Accounts.findByPk(id, {
        attributes: ["firstName", "lastName", "createdTask", "resolvedTask"],
        include: [{model: Tasks}, {model: Languages}, {model: Themes}]
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
