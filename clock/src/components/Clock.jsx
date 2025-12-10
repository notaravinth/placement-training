import React, { useState, useEffect } from 'react';
import './Clock.css'; 

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="clock-container">
      <h1 className="clock-title">Clock</h1>
      <p className="time-display">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default Clock;