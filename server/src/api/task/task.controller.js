const TaskService = require("../../services/task.service")

create = async (req, res) => {
    try {
        await TaskService.create(req.body);
        res.status(201).send();
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

findAll = async (req, res) => {
    try {
        const result = await TaskService.findAll();
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

findByPk = async (req, res) => {
    try {
        const task = await TaskService.findByPk(req.params.id);
        res.status(200).send(task);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

update = async (req, res) => {
    try {
        const updateTask = await TaskService.update(req.params.id, req.body);
        res.status(200).send(updateTask);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

deleteAll = async (req, res) => {
    try {
        await TaskService.deleteAll(req.body);
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}
checkSolution = async (req, res) => {
    try {
       await TaskService.checkSolution(req.params.id, req.body);
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}


module.exports = {
    create: create,
    findAll: findAll,
    findByPk: findByPk,
    update: update,
    deleteAll: deleteAll,
    checkSolution: checkSolution,
};