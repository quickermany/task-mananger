module.exports = (sequelize, Sequelize) => {
    const  Task_tags = sequelize.define("task_tags", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            field: "ID",
            type: Sequelize.INTEGER
        },
        taskId: {
            field: "TASKS_ID",
            type: Sequelize.INTEGER
        },
        tagId: {
            field: "TAGS_ID",
            type: Sequelize.INTEGER
        },
    });
    return Task_tags
};