module.exports = () => {
    return (req, res, next) => {
        if (req.cookies.userId) {
            next();
        } else {
            res.status(401).send("User unauthorized")
        }
    }
}