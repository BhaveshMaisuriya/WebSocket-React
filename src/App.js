import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./scss/index.css";
import TabView from './components/tabView';

import io from 'socket.io-client';
const socket = io('localhost:3001');

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });
  
    socket.on('disconnect', () => {
      setIsConnected(false);
    });
  
    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);


  return (
    <div className="App">
      <div className='container'>
        <div className='title'><h3> Single Currency Grid</h3>
          <p>WebSocket Connected: {'' + isConnected}</p></div>
        <TabView/>
      </div>
    </div>
  );
}

export default App;
