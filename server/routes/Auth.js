const express = require('express');
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const addNewUser = require("../ConnectDB");
const bcrypt = require('bcrypt');
const router = express.Router();
const { Validator } = require('node-input-validator');
const User = require('../model/user');
const verifyToken = require('../middleware/VerifyToken');


function hashPassword(password){
  return bcrypt.hash(password, 12);
}

async function validateInput(req){
  const v = new Validator(req.body, {
    email: 'required|email',
    nickname: 'required|maxLength:16|minLength:3',
    password: 'required|maxLength:16|minLength:6'
  });

  const matched = await v.check(); 
  if (!matched) {
    throw Error(`Invalid input: ${JSON.stringify(v.errors)}`);
  }
}

router.post('/login', async (req, res) => {
  const {email, password } = req.body;
  const user = await User.findOne({email});
  const validPassword = await bcrypt.compare(password, user.password);
  console.log(`Result ${validPassword}`);
  if (validPassword) {
    const token = jwt.sign({email: email}, config.secretkey, { expiresIn: '24h'});
    res.status(200).send({login: true, accessToken: token });
  } else {
    res.status(404).send('Incorrect email or password');
  }
});

 router.post('/signup', async (req, res) => {
   try {
   await validateInput(req);
   const {nickname, email, password } = req.body;
   console.log(`Signup: The Nickname is = ${nickname}, Email is = ${email} password=${password}`);
   const modifyPassword = await hashPassword(password);
   await addNewUser(nickname, email, modifyPassword);
   const token = jwt.sign({email: email}, config.secretkey, { expiresIn: '1h'});
   res.status(200).send({auth: true, accessToken: token });

   } catch(e) {
    console.log(e.message);
    res.status(404).send(e.message);
   }
 });

 router.get('/chat', verifyToken, async (req, res) => {
  console.log('/chat- connecting!');
  res.status(200).send({auth: true, accessToken: true, message:'connecting chat' });
 });


module.exports = router;