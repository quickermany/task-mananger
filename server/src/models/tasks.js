module.exports = (sequelize, Sequelize)=> {
    const Tasks = sequelize.define("tasks", {
        id:{
            primaryKey: true,
            autoIncrement: true,
            field: "ID",
            type: Sequelize.INTEGER
        },
        title: {
            field: "TITLE",
            type: Sequelize.TEXT
        },
        conditionTask:{
            field: "CONDITION_TASK",
            type: Sequelize.TEXT
        },
        formatingsId:{
            field: "FORMATINGS_ID",
            type: Sequelize.INTEGER
        },
        topicId:{
            field: "TOPICS_ID",
            type: Sequelize.INTEGER
        },
        accountId:{
            field: "ACCOUNTS_ID",
            type: Sequelize.INTEGER
        },
    });
    return Tasks
};