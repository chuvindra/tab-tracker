const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON())
        } catch(err){
            res.send({
                error:`This Email Already registed`
            })
        }
    }
}