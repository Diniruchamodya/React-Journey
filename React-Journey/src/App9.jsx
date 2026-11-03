
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Diniru", degree: "Industrial Information Technology" },
    { id: 2, name: "Kasun", degree: "Computer Science" },
    { id: 3, name: "Amali", degree: "Software Engineering" },
  ]);
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [nextStudentId, setNextStudentId] = useState(
    () => Math.max(...students.map((student) => student.id)) + 1,
  );
  const sortedStudents = [...students].sort((first, second) => {
    const comparison = first.name.localeCompare(second.name);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  function addStudent() {
    const trimmedName = name.trim();
    const trimmedDegree = degree.trim();

    if (!trimmedName || !trimmedDegree) {
      setValidationMessage("Name and degree cannot be empty.");
      return;
    }

    setStudents((currentStudents) => [
      ...currentStudents,
      { id: nextStudentId, name: trimmedName, degree: trimmedDegree },
    ]);
    setNextStudentId((id) => id + 1);
    setName("");
    setDegree("");
    setValidationMessage("");
  }

  function editStudent(id, newName, newDegree) {
    const trimmedName = newName.trim();
    const trimmedDegree = newDegree.trim();

    if (!trimmedName || !trimmedDegree) {
      setValidationMessage("Name and degree cannot be empty.");
      return;
    }

    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, name: trimmedName, degree: trimmedDegree };
      }
      return student;
    });
    setStudents(updatedStudents);
    setValidationMessage("");
  }

  function deleteStudent(id) {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  }

  return (
    <main>
      <h1>Student Management System</h1>

      <section>
        <h2>Add Student</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            addStudent();
          }}
        >
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setValidationMessage("");
              }}
            />
          </label>
          <label>
            Degree
            <input
              type="text"
              value={degree}
              onChange={(event) => {
                setDegree(event.target.value);
                setValidationMessage("");
              }}
            />
          </label>
          <button type="submit">Add Student</button>
        </form>
        {validationMessage && <p role="alert">{validationMessage}</p>}
      </section>

      <section>
        <h2>Student List</h2>

        <div>
          <button
            type="button"
            onClick={() => setSortOrder("asc")}
            aria-pressed={sortOrder === "asc"}
          >
            A–Z
          </button>
          <button
            type="button"
            onClick={() => setSortOrder("desc")}
            aria-pressed={sortOrder === "desc"}
          >
            Z–A
          </button>
        </div>

        {sortedStudents.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <ul>
            {sortedStudents.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>
                <span>{student.degree}</span>
                <button
                  onClick={() => {
                    const newName = window.prompt(
                      "Enter student name",
                      student.name,
                    );
                    if (newName === null) return;
                    const newDegree = window.prompt(
                      "Enter student degree",
                      student.degree,
                    );
                    if (newDegree !== null) {
                      editStudent(student.id, newName, newDegree);
                    }
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
export default App;
