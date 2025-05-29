import React from 'react';
import './App.css';
import VideoBackground from './components/VideoBackground';
import MembershipButtons from './components/MembershipButtons';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <VideoBackground />
      <MembershipButtons />
    </div>
  );
}

export default App;
