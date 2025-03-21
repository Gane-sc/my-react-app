import React from 'react';

const scheduleData = [
  { subject: "Integrative Programming and Technologies LEC", day: "Tuesday", time: "8:00 AM - 10:00 AM", room: "LAB C" },
  { subject: "Networking LEC", day: "Tuesday", time: "03:00 PM - 05:00 PM", room: "LAB A" },
  { subject: "Web Development LEC", day: "Tuesday", time: "11:00 AM - 1:00 PM", room: "LAB B" },
  { subject: "Database Management System LEC", day: "Tuesday", time: "6:00 PM - 8:00 PM", room: "LAB D" },
  { subject: "Introduction to Human Computer Interaction LEC", day: "Tuesday", time: "1:00 PM - 3:00 PM", room: "LAB E" }
];

const App = () => {
  return (
    <div>
      <h2>Schedule</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Subject</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Day</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Time</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Room</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.subject}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.day}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.time}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
