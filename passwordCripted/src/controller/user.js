const { User } = require('../model/user');

const bcrypt = require('bcrypt'); //password bcrypted use import this pacakge

const salt = bcrypt.genSaltSync(10)




const getUser = async (req, res) => {
  data = await User.find()
  res.json(data)
}

// Created User
const CreateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const bcrpassword = await bcrypt.hashSync(password, salt);  //this field use to password to bcrypted form

    await User.create({ username: username, password: bcrpassword });

    res.json({ "msg": "User created Sucessfully" })

  } catch (error) {
    res.error("User Not Created", error)
  }
}


module.exports = { CreateUser, getUser }