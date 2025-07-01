import React from 'react';
import CourseCard from './CourseCard';
const courses = [
    { id: 1, title: 'Web Development', description: 'HTML, CSS, JS overview.' },
  { id: 2, title: 'JavaScript Mastery', description: 'Deep dive into JS.' },
  { id: 3, title: 'React Basics', description: 'Introduction to React.' },

];

export default function CourseList() {
  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
