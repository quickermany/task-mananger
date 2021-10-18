module.exports = (sequelize, Sequelize) => {
    const AccountSolution = sequelize.define("account_solutions", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
            field: "id"
        },
        accountId: {
            type: Sequelize.INTEGER,
            field: "account_id"
        },
        solutionId: {
            type: Sequelize.INTEGER,
            field: "solution_id"
        },
        taskId:{
            type: Sequelize.INTEGER,
            field: "task_id"
        }
    });
    return AccountSolution;
};
