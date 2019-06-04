module.exports = {
    register (req, res) {
        console.log(req.body.email)
        res.send({message: `hello ${req.body.email}! and ${req.body.password} Your User has been registered`})
    }
}