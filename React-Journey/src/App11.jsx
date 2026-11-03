
import { useState, useEffect } from "react";

function App() {
  const initialStudents = [
    { id: 1, name: "Diniru", degree: "Industrial Information Technology" },
    { id: 2, name: "Kasun", degree: "Computer Science" },
    { id: 3, name: "Amali", degree: "Software Engineering" },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [isLoaded, setIsLoaded] = useState(false);

  // Mission 1 & 3: Load saved students when the app starts.
  useEffect(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }

    setIsLoaded(true);
  }, []);

  // Mission 2 & 4: Save students whenever they change.
  useEffect(() => {
    if (isLoaded) {
      const studentsJSON = JSON.stringify(students);

      localStorage.setItem("students", studentsJSON);
    }
  }, [students, isLoaded]);

  function addStudent() {
    const newStudent = {
      id: Date.now(),
      name: "New Student",
      degree: "Computer Science",
    };

    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent,
    ]);
  }

  function deleteStudent(id) {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== id)
    );
  }

  return (
    <main>
      <h1>Persistent Student Management System</h1>

      <button onClick={addStudent}>Add Student</button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.degree}
            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
