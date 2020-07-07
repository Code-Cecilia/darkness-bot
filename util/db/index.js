const { User} = require('./models')

module.exports = {
    // Getting collections
    getUser: (id) => {
        return User.findOne({ id_: id })
    }
}