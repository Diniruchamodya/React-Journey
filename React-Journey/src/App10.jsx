
import { useState } from "react";

function App() {
  const [students] = useState([
    { id: 1, name: "Diniru", degree: "Industrial Information Technology" },
    { id: 2, name: "Kasun", degree: "Computer Science" },
    { id: 3, name: "Amali", degree: "Software Engineering" },
    { id: 4, name: "Rahul", degree: "Computer Science" },
    { id: 5, name: "Linuka", degree: "Industrial Information Technology" },
  ]);

  
  const [searchText, setSearchText] = useState("");

  const [selectedDegree, setSelectedDegree] = useState("");

 
  const [sortOrder, setSortOrder] = useState("name-asc");


  const filteredAndSortedStudents = students
    .filter((student) => {
      const matchesSearchText = student.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesSelectedDegree = selectedDegree === "" || student.degree === selectedDegree;
      return matchesSearchText && matchesSelectedDegree;
    })
    .sort((a, b) => {
      if (sortOrder === "degree") {
        return a.degree.localeCompare(b.degree, undefined, { sensitivity: "base" });
      }
      const nameComparison = a.name.localeCompare(b.name, undefined, {
        sensitivity: "base",
      });
      return sortOrder === "name-desc" ? -nameComparison : nameComparison;
    });


  return (
    <main>
      <h1>Student Search Engine</h1>

    
      <input
        type="text"
        placeholder="Search students..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

    
      <select
        value={selectedDegree}
        onChange={(event) => setSelectedDegree(event.target.value)}
      >
        <option value="">All Degrees</option>
        <option value="Industrial Information Technology">Industrial Information Technology</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Software Engineering">Software Engineering</option>
      </select>

      
      <select
        value={sortOrder}
        onChange={(event) => setSortOrder(event.target.value)}
      >
        <option value="name-asc">Name A–Z</option>
        <option value="name-desc">Name Z–A</option>
        <option value="degree">Degree A–Z</option>
      </select>

      <h2>Student List</h2>

      {filteredAndSortedStudents.length === 0 ? (
        <p role="status">No students found.</p>
      ) : (
        <ul>
          {filteredAndSortedStudents.map((student) => (
            <li key={student.id}>
              {student.name} — {student.degree}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
