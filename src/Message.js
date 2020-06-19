import React, { useState, useEffect } from 'react';

const Message = () => {
  const [state, setState] = useState({ message: 'Nice' });

  useEffect(() => {
    const listener = (message) => {
      console.log(message);
      setState(message)
    };
    chrome.runtime.onMessage.addListener(listener);
    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    }
  }, []);

  return (
    <h1>
      {state.message}
    </h1>
  );
};

export default Message;
