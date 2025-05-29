import React from 'react';
import './VideoBackground.css';

export default function VideoBackground() {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src="https://example.com/demo-video.mp4" type="video/mp4" />
        Your browser doesn’t support videos.
      </video>
      <div className="video-overlay">
        <h1>Welcome to TruYan</h1>
        <p>Earn MAZOL (MZLx) by creating content!</p>
      </div>
    </div>
  );
}
