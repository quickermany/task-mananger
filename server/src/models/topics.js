module.exports = (sequelize, Sequelize) => {
    const  Topics = sequelize.define("topics", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            field: "id",
            type: Sequelize.INTEGER
        },
        topicName: {
            field: "topic_name",
            type: Sequelize.STRING
        }
    });
    return Topics
};