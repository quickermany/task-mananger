module.exports = (sequelize, Sequelize) => {
    const  Formatings = sequelize.define("formatings", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            field: "id",
            type: Sequelize.INTEGER
        },
        textFormatings: {
            field: "text_formatings",
            type: Sequelize.STRING
        }
    });
    return Formatings
};