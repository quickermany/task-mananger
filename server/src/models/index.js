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
        timestamps: false,
        freezeTableName: true
    }
});

db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Accounts = require("./accounts.js")(sequelize, Sequelize);
db.Tasks = require("./tasks.js")(sequelize, Sequelize);
db.Solutions = require("./solutions")(sequelize, Sequelize);
db.Ratings = require("./ratings")(sequelize, Sequelize);
db.AccountSolution = require("./account.solution")(sequelize, Sequelize);
db.Topics = require("./topics")(sequelize, Sequelize);
db.Formatings = require("./formatings")(sequelize, Sequelize);
db.Tags = require("./tags")(sequelize, Sequelize);
db.Task_tags = require("./task.tags")(sequelize, Sequelize);

db.Accounts.hasMany(db.Tasks, {onDelete: 'cascade'});
db.Tasks.belongsTo(db.Accounts, {foreignKey: 'accounts_id'});

db.Tasks.belongsToMany(db.Tags, {
    through: db.Task_tags, foreignKey: "task_id"
});
db.Tags.belongsToMany(db.Tasks, {
    through: db.Task_tags, foreignKey: "tag_id"
});

db.Tasks.hasMany(db.Solutions, {
    foreignKey: 'task_id'
});

db.Solutions.belongsTo(db.Tasks);

db.Tasks.hasMany(db.Ratings, {onDelete: 'cascade'});

db.Topics.hasMany(db.Tasks);
db.Tasks.belongsTo(db.Topics, {onDelete: 'cascade'});

db.Tasks.hasOne(db.AccountSolution)

module.exports = db;
