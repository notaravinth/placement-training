import React from 'react';
import './Sidebar.css'; 
import SidebarChat from '../SidebarChat/SideBarChat';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img 
          src="https://via.placeholder.com/40" 
          alt="User Avatar"
          className="sidebar__avatar"
        />
        <div className="sidebar__headerRight">
          <span className="icon" role="img" aria-label="status">&#x25CF;</span> 
          <span className="icon" role="img" aria-label="new chat">💬</span> 
          <span className="icon" role="img" aria-label="menu">⋮</span> 
        </div>
      </div>
      
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <span role="img" aria-label="search">🔍</span>
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      
      <div className="sidebar__chats">
        <SidebarChat name="React Buddy" lastMessage="Hey, check the CSS." timestamp="1:00 PM" />
        <SidebarChat name="Simple Clone" lastMessage="No external icons!" timestamp="Today" />
        <SidebarChat name="Project Team" lastMessage="Don't forget the meeting!" timestamp="Yesterday" />
      </div>
    </div>
  );
}

export default Sidebar;