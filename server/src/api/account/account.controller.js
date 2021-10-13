const AccountService = require("../../services/account.service");

findAll = async (req, res) => {
    try {
        const result = await AccountService.findAll();
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

findByPk = async (req, res) => {
    try {
        const account = await AccountService.findByPk(req.params.id);
        res.status(200).send(account)
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

create = async (req, res) => {
    try {
        await AccountService.create(req.body);
        res.status(201).send();
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

module.exports = {
    findAll: findAll,
    create: create,
    findByPk: findByPk
};
