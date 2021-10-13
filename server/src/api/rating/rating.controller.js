const RatingService = require ("../../services/rating.service");

create = async (req, res) => {
  try {
      await RatingService.create(req.body);
      res.status(200).send();
  } catch(err){
      console.error(err);
      res.status(500).send("Server error")
  }
}


module.exports = {
    create: create,
};