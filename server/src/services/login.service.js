const db = require("../models");
const Account = db.Accounts;
const {OAuth2Client} = require('google-auth-library');
const config = require('config').get('dev');
const clientId = config.clientId;
const client = new OAuth2Client(clientId);


logIn = async (logInInfo) => {
    if (logInInfo.origin == 'google') {
        const ticket = await client.verifyIdToken({
            idToken: logInInfo.data.token,
            audience: clientId
        });
        const result = await Account.findOne({where: {accountId: logInInfo.data.id}})
        if (result) {
            return result;
        } else {
            return Account.create({accountId: logInInfo.data.id, firstName: ticket.getPayload().name, role: "user"})
        }
    }
}

module.exports = {
    logIn: logIn
}
