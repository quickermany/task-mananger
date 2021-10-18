module.exports = (sequelize, Sequelize) => {
    const Ratings = sequelize.define("ratings", {
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
        accountId: {
            field: "account_id",
            type: Sequelize.INTEGER
        },
        rating: {
            field: "rating",
            type: Sequelize.INTEGER
        }
    });
    return Ratings
};