const db = require("../models");
const Tasks = db.Tasks;

findAll = async () => {
    return Tasks.findAll();
}


module.exports = {
    findAll : findAll
}