module.exports = (sequelize, Sequelize) => {
    const Accounts = sequelize.define("accounts", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            field: "ID"
        },
        accountId: {
            type: Sequelize.STRING,
            field: "ACCOUNT_ID"
        },
        firstName: {
            type: Sequelize.STRING,
            field: "FIRST_NAME"
        },
        createdTask: {
            type: Sequelize.INTEGER,
            field: "CREATED_TASK"
        },
        resolvedTask: {
            type: Sequelize.INTEGER,
            field: "RESOLVED_TASK"
        },
        role:{
            type: Sequelize.STRING,
            field: "ROLE"
        }
    });
    return Accounts;
};
