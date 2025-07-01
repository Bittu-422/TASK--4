import React from 'react';
import CourseList from './components/CourseList';
import ProgressTracker from './components/ProgressTracker';
import VideoPlayer from './components/VideoPlayer';
import './styles.css';

export default function App() {
  return (
    <div className="container">
      <h1>E-Learning Platform</h1>
      <CourseList />
      <ProgressTracker progress={80} />
      <section>
      <div><VideoPlayer videoUrl="https://www.youtube.com/embed/HcOc7P5BMi4?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i"/></div>
      <VideoPlayer videoUrl="https://www.youtube.com/embed/VlPiVmYuoqw"/>
      <VideoPlayer videoUrl="https://www.youtube.com/embed/eILUmCJhl64" />
      </section>
    </div>
  );
}
