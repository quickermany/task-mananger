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

module.exports = {
    findAll: findAll,
};
