import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import io from 'socket.io-client';
import pic from '../../style/images/logo1.png';

import 'react-chat-widget/lib/styles.css';
var socket = io.connect('http://localhost:3001/');

function ChatWidget() {
  socket.on('message', (data) => {
    console.log(`from server: ${data}`);
    addResponseMessage(data);
  });
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    const hasAccessToken = localStorage.getItem('accessToken');
    console.log(`socket ${hasAccessToken}`);
    socket.emit('chat message', {
      body: newMessage,
      accessToken: hasAccessToken,
    });
  };

  return (
    <div className="ChatWidget">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        titleAvatar={pic}
        profileAvatar={pic}
        fullScreenModer={true}
        title="Welcome"
        subtitle="Room: Lobby"
      />
    </div>
  );
}

export default ChatWidget;
