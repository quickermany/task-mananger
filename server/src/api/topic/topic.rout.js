const Topic = require("./topic.controller");
const router = require("express").Router();

module.exports = app => {
    router.get('/', Topic.findAll);

    app.use('/api/topics', router);
}