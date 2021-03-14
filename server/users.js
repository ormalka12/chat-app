let users = [];

function joinRoom(socketId, userName, roomName){
const user = {
    socketID: socketId,
    username: userName,
    roomname: roomName,
 }
 users.push(user);
 return user;
}
