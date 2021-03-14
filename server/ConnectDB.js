const mongoose = require('mongoose');
const user = require('./model/user');
mongoose.connect('mongodb://localhost:27017/chatRoomDB', {useNewUrlParser: true, useUnifiedTopology: true});


function addNewUser(nickname, email, password){
    const newUser = new user({
         nickname: nickname,
         email: email,
         password: password,
         room: 'Lobby'
        });
         newUser.save(function (err, newUser) {
            if (err) console.log(err);
            else console.log(`New user added: ${newUser}`);
          })
        
}

module.exports = addNewUser;