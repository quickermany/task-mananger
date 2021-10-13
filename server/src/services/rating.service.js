const db = require("../models");
const Ratings = db.Ratings;

create = async (rating) => {
    const data = await Ratings.findOne({where: {accountId: rating.accountId, taskId: rating.taskId}});
    if (data === null) {
       await Ratings.create(rating);
    } else {
       await Ratings.update({rating: rating.rating}, {where: {id: data.dataValues.id}});
    }
};

module.exports = {
    create: create
}