module.exports = (sequelize, Sequelize)=> {
    const Solutions = sequelize.define("solutions", {
        id:{
            primaryKey: true,
            autoIncrement: true,
            field: "ID",
            type: Sequelize.INTEGER
        },
        textSolution: {
            field: "TEXT_SOLUTION",
            type: Sequelize.STRING
        },
        taskId:{
            field: "TASKS_ID",
            type: Sequelize.INTEGER
        }
    });
    return Solutions
};