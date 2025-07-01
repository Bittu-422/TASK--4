import React from 'react';

export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="video-player">
      <h3>Course Video</h3>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Course Video"
      ></iframe>
    </div>
  );
}
