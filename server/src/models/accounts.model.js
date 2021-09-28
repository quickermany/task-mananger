module.exports = (sequelize, Sequelize) => {
    const Accounts = sequelize.define("accounts", {
        ID: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        FIRST_NAME: {
            type: Sequelize.STRING
        },
        LAST_NAME: {
            type: Sequelize.STRING
        },
        CREATED_TASK: {
            type: Sequelize.INTEGER
        },
        RESOLVED_TASK: {
            type: Sequelize.INTEGER
        },
        LANGUAGES_ID: {
            type: Sequelize.INTEGER
        },
        THEMES_ID: {
            type: Sequelize.INTEGER
        }
    });
    return Accounts;
};
