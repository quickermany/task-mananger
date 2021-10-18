module.exports = (sequelize, Sequelize) => {
    const Accounts = sequelize.define("accounts", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            field: "id"
        },
        accountId: {
            type: Sequelize.STRING,
            field: "account_id"
        },
        firstName: {
            type: Sequelize.STRING,
            field: "first_name"
        },
        createdTask: {
            type: Sequelize.INTEGER,
            field: "created_task"
        },
        resolvedTask: {
            type: Sequelize.INTEGER,
            field: "resolved_task"
        },
        role:{
            type: Sequelize.STRING,
            field: "role"
        }
    });
    return Accounts;
};
