const express = require('express');
const chalk = require('chalk');
const app = express();

const config = require('config').get('dev');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.authenticate().then(() => {
    console.log(chalk.green("Sync db"));
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to task-manager application." });
});

require("./api/user/account.rout")(app);

app.listen(config.port, () => {
    console.log(chalk.green(`Application is starting on ${config.port} port`));
});
