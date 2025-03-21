import React, { useEffect, useState } from "react";

const CourseTable = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json") // Load JSON data
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div>
      <h2>Course Schedule</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Day</th>
            <th>Time</th>
            <th>Room</th>
           
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.subject}</td>
              <td>{course.day}</td>
              <td>{course.time}</td>
              <td>{course.room}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
