const config = require('config').get('dev');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.dbConfig.DB, config.dbConfig.USER, config.dbConfig.PASSWORD, {
    host: config.dbConfig.HOST,
    dialect: config.dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: config.dbConfig.pool.max,
        min: config.dbConfig.pool.min,
        acquire: config.dbConfig.pool.acquire,
        idle: config.dbConfig.pool.idle
    },

    define: {
        timestamps: false
    }
});

db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Accounts = require("./accounts.model.js")(sequelize, Sequelize);
db.Tasks = require("./tasks.model.js")(sequelize, Sequelize);

module.exports = db;
