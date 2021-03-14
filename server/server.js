
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const auth = require('./routes/Auth');
const bodyParser = require("body-parser");
const PORT = 3001 || process.env.PORT;
var cors = require('cors');
var jwt = require('jsonwebtoken');
const config = require("./config/config");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', auth);


   io.on('connection', (socket) => {
     console.log('a user connected!');
     socket.on('chat message', (msg) => {
     console.log(`now server emit message: ${msg.body}`);
     const token = msg.accessToken;
     const username = jwt.verify(token, config.secretkey);
     console.log(`username is : ${username.email}`);
     socket.broadcast.emit("message", `${username.email}: ${msg.body}`);
     });
   });


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
