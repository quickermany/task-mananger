const express = require('express');
const chalk = require('chalk');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const FileStore = require('session-file-store')(session);
const path = require('path');

const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

const config = require('config').get('dev');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    store: new FileStore({
        path:  path.join(require('os').tmpdir(), 'sessions')
    }),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 36000000000000 }
}));

const db = require("./models");
db.sequelize.authenticate().then(() => {
    console.log(chalk.green("Sync db"));
});

require("./api/account/account.rout")(app);
require("./api/task/task.rout")(app);
require("./api/rating/rating.rout")(app);
require("./api/topic/topic.rout")(app);
require("./api/login/login.rout")(app);

app.listen(config.port, () => {
    console.log(chalk.green(`Application is starting on ${config.port} port`));
});
