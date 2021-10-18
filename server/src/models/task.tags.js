module.exports = (sequelize, Sequelize) => {
    const  Task_tags = sequelize.define("task_tags", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            field: "id",
            type: Sequelize.INTEGER
        },
        taskId: {
            field: "task_id",
            type: Sequelize.INTEGER
        },
        tagId: {
            field: "tag_id",
            type: Sequelize.INTEGER
        },
    });
    return Task_tags
};