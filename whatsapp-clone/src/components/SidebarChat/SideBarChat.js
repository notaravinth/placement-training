import React from 'react';
import '../SidebarChat/SideBarChat.css'; 

function SidebarChat({ name, lastMessage, timestamp }) {
  return (
    <div className="sidebarChat">
      <img 
        src="https://via.placeholder.com/45" 
        alt="Contact Avatar"
        className="sidebarChat__avatar"
      />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>{lastMessage}</p>
      </div>
      <div className="sidebarChat__timestamp">
        <small>{timestamp}</small>
      </div>
    </div>
  );
}

export default SidebarChat;