module.exports = (sequelize, Sequelize)=> {
    const Tasks = sequelize.define("tasks", {
        ID:{
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        TITLE: {
            type: Sequelize.TEXT
        },
        CONDITION_TASK:{
            type: Sequelize.TEXT
        },
        FORMATINGS_ID:{
            type: Sequelize.INTEGER
        },
        SOLUTIONS_ID:{
            type: Sequelize.INTEGER
        },
        TOPICS_ID:{
            type: Sequelize.INTEGER
        },
        ACCOUNTS_ID:{
            type: Sequelize.INTEGER
        },
    });
    return Tasks
};