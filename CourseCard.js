import React from 'react';

export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
}
