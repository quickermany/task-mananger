const  Task = require("./task.controller");
const router = require("express").Router();

module.exports = app => {
    router.post('/', Task.create);
    router.post('/:id',Task.checkSolution);
    router.get('/', Task.findAll);
    router.get('/:id', Task.findByPk);
    router.put('/:id', Task.update);
    router.delete('/', Task.deleteAll);

    app.use('/api/tasks', router);
}