const { User } = require('../module/user');

const createUser = async () => {
    try {
        const { name, email, password } = req.body

        await User.create({ name: name, email: email, password: password })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createUser }