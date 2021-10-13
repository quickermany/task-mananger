const Rating = require("./rating.controller");
const router = require("express").Router();

module.exports = (app) => {
    router.post('/', Rating.create);

    app.use('/api/ratings', router);
};