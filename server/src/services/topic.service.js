const db = require("../models");
const Topics = db.Topics;

findAll= async () => {
    return Topics.findAll()
}

module.exports = {
    findAll: findAll
}
