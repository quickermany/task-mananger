module.exports = (sequelize, Sequelize) => {
    const Accounts = sequelize.define("accounts", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            field: "ID"
        },
        firstName: {
            type: Sequelize.STRING,
            field: "FIRST_NAME"
        },
        lastName: {
            type: Sequelize.STRING,
            field: "LAST_NAME"
        },
        createdTask: {
            type: Sequelize.INTEGER,
            field: "CREATED_TASK"
        },
        resolvedTask: {
            type: Sequelize.INTEGER,
            field: "RESOLVED_TASK"
        },
        languagesId: {
            type: Sequelize.INTEGER,
            field: "LANGUAGES_ID"
        },
        themesId: {
            type: Sequelize.INTEGER,
            field: "THEMES_ID"
        }
    });
    return Accounts;
};
