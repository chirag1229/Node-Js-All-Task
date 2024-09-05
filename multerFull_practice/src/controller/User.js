const { User } = require('../model/User');
const jwt = require('jsonwebtoken');



const registration = async (req, res) => {
    const data = req.body

    const userName = data['userName']
    const password = data['password']
    await User.create({ userName, password })

    res.json({ msg: "User created" })
}

// const userLogin = async (req, res) => {
//     const data = req.body

//     const userName = data['userName']
//     const password = data['password']

//     const userData = await User.findOne({userName,password})

//     if (userData) {
//         // const 
//     }


// }


module.exports = { registration, userLogin }