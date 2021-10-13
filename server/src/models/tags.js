module.exports = (sequelize, Sequelize) => {
    const  Tags = sequelize.define("tags", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            field: "ID",
            type: Sequelize.INTEGER
        },
        tagText: {
            field: "TAGS_TEXT",
            type: Sequelize.STRING
        }
    });
    return Tags
};