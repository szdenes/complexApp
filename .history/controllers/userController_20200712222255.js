const User = require('../models/User')

exports.login = () => {

}
exports.logout = () => {

}
exports.register = (req, res) => {
    let user = new User(req.body)
    user.register()
    if(){

    }else
    
}
exports.home = (req, res) => {
    res.render('home-guest')
}