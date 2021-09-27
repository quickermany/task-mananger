module.exports = (sequelize, Sequelize) => {
    const Accounts = sequelize.define("accounts", {
        id: {
            primaryKey: true,
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        }
    });
    return Accounts;
};
