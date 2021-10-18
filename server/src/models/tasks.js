module.exports = (sequelize, Sequelize)=> {
    const Tasks = sequelize.define("tasks", {
        id:{
            primaryKey: true,
            autoIncrement: true,
            field: "id",
            type: Sequelize.INTEGER
        },
        title: {
            field: "title",
            type: Sequelize.TEXT
        },
        conditionTask:{
            field: "condition_task",
            type: Sequelize.TEXT
        },
        formatingsId:{
            field: "formatings_id",
            type: Sequelize.INTEGER
        },
        topicId:{
            field: "topics_id",
            type: Sequelize.INTEGER
        },
        accountId:{
            field: "accounts_id",
            type: Sequelize.INTEGER
        },
    });
    return Tasks
};