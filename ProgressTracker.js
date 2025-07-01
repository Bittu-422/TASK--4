import React from 'react';

export default function ProgressTracker({ progress }) {
  return (
    <div className="progress-tracker">
      <h3>Progress</h3>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <span>{progress}% Completed</span>
    </div>
  );
}
