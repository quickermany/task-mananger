module.exports = (sequelize, Sequelize) => {
    const  Formatings = sequelize.define("FORMATINGS", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            field: "ID",
            type: Sequelize.INTEGER
        },
        textFormatings: {
            field: "TEXT_FORMATING",
            type: Sequelize.STRING
        }
    });
    return Formatings
};