module.exports = (sequelize, Sequelize) => {
    const AccountSolution = sequelize.define("account_solutions", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            field: "ID"
        },
        accountId: {
            type: Sequelize.INTEGER,
            field: "ACCOUNTS_ID"
        },
        solutionId: {
            type: Sequelize.INTEGER,
            field: "SOLUTIONS_ID"
        },
        taskId:{
            type: Sequelize.INTEGER,
            field: "TASKS_ID"
        }
    });
    return AccountSolution;
};
