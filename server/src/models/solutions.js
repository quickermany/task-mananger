module.exports = (sequelize, Sequelize) => {
    const Solutions = sequelize.define("solutions", {
            id: {
                primaryKey: true,
                autoIncrement: true,
                field: "id",
                type: Sequelize.INTEGER
            },
            textSolution: {
                field: "text_solution",
                type: Sequelize.STRING
            },
            taskId: {
                field: "task_id",
                type: Sequelize.INTEGER
            }
        }
    );
    return Solutions
};