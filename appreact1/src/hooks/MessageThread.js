import React, { useState, useRef } from "react";

function MessageThread() {
    // const [message, setMessage] = useState("");
    const latestMessage = useRef("");
  
    const showMessage = () => {
      alert("You said: " + latestMessage.current);
    };
  
    const handleSendClick = () => {
      setTimeout(showMessage, 3000);
    };
  
    const handleMessageChange = e => {
        latestMessage.current = e.target.value
    };
  
    return (
      <>
        <input onChange={handleMessageChange} />
        <button onClick={handleSendClick}>Send</button>
      </>
    );
  }
  export default MessageThread