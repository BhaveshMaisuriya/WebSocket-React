import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./scss/index.css";
import io from 'socket.io-client';
import TabView from './components/tabView';

const socket = io('localhost:3001');

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [tab1Data, setTab1Data] = useState([]);
  const [tab2Data, setTab2Data] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('tab1', data => {
      console.log('streaming tab1 data...');
      setTab1Data(data);
    });

    socket.on('tab2', data => {
      console.log('streaming tab2 data...');
      setTab2Data(data);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  },[tab1Data,tab2Data]);

  return (
    <div className="App">
      <div className='container'>
        <div className='title'><h3> Single Currency Grid</h3>
        <p>WebSocket Connected: {'' + isConnected}</p></div>
        <TabView tab1Data={tab1Data} tab2Data={tab2Data} />
      </div>
    </div>
  );
}

export default App;
