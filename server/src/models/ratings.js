module.exports = (sequelize, Sequelize) => {
    const Ratings = sequelize.define("RATINGS", {
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
        accountId: {
            field: "ACCOUNTS_ID",
            type: Sequelize.INTEGER
        },
        rating: {
            field: "RATING",
            type: Sequelize.INTEGER
        }
    });
    return Ratings
};