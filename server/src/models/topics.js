module.exports = (sequelize, Sequelize) => {
    const  Topics = sequelize.define("topics", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            field: "ID",
            type: Sequelize.INTEGER
        },
        topicName: {
            field: "TOPIC_NAME",
            type: Sequelize.STRING
        }
    });
    return Topics
};