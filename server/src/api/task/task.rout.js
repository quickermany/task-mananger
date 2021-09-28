const  Task = require("./task.controller");
const router = require("express").Router();

module.exports = app => {
    router.get("/", Task.findAll);

    app.use('/api/tasks', router);
}