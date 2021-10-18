module.exports = (sequelize, Sequelize) => {
    const  Tags = sequelize.define("tags", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            field: "id",
            type: Sequelize.INTEGER
        },
        tagText: {
            field: "tag_text",
            type: Sequelize.STRING
        }
    });
    return Tags
};