import React, { useState } from 'react';
import './Chat.css'; 

function Chat() {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
        console.log(`Sending message: ${input}`);
        setInput('');
    }
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <img 
          src="https://via.placeholder.com/40"
          alt="Contact Avatar"
        />
        <div className="chat__headerInfo">
          <h3>React Buddy</h3>
          <p>Last seen today at 1:45 PM</p>
        </div>
        <div className="chat__headerRight">
          <span className="icon" role="img" aria-label="search">🔍</span> 
          <span className="icon" role="img" aria-label="menu">⋮</span> 
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message chat__receiver">
          <span className="chat__name">React Buddy</span>
          Hey, check the CSS.
          <span className="chat__timestamp">1:00 PM</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">You</span>
          Got it, looks great!
          <span className="chat__timestamp">1:02 PM</span>
        </p>
      </div>

      <div className="chat__footer">
        <span className="icon" role="img" aria-label="emoji">😊</span> 
        
        <form>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message" 
            type="text" 
          />
          <button onClick={sendMessage} type="submit">
            {input ? '▶️' : '🎤'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;