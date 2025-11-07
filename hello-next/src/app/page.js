"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [students, setStudents] = useState([]);
  const [nameInput, setNameInput] = useState("");

  // Load student data initially
  useEffect(() => {
    fetch("/data/students.json")
      .then((res) => res.json())
      .then(() => setStudents());
  }, []);

  async function addStudent() {
    if (!nameInput.trim()) return;

    await fetch("/api/add-student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameInput })
    });

    // Clear input box
    setNameInput("");

    // Re-fetch updated student list
    const updated = await fetch("/data/students.json").then((res) =>
      res.json()
    );
    setStudents(updated);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Student Grades</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Student name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <ul>
        {students.map((student, i) => (
          <li key={i}>
            {student.name}: {student.grade}
          </li>
        ))}
      </ul>
    </main>
  );
}
