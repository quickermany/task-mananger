const TopicService = require("../../services/topic.service")

findAll = async (req, res) => {
    try {
        const topic = await TopicService.findAll();
        res.status(200).send(topic);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}

module.exports = {
    findAll: findAll
};