const LoginService = require("../../services/login.service")

create = async (req, res) => {
    try {
        const user = await LoginService.logIn(req.body);
        if (user) {
            req.session.loggedin = true;
            res.status(201);
            res.cookie('userId', user.id, {maxAge: 900000, httpOnly: false});
            res.json({logged: true, role: user.role, accountId: user.id});
        } else {
            res.status(401).send()
        }

    } catch
        (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
}


module.exports = {
    create: create
};
