import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mission 1: Create a function to fetch users
  async function fetchUsers() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=5"
      );

      // Mission 2: Handle unsuccessful HTTP responses
      if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }

      const data = await response.json();
      setUsers(data.results);

    } catch (err) {
      setError(err.message || "Something went wrong.");

    } finally {
      // Mission 3: Reset loading state
      setIsLoading(false);
    }
  }

  // Mission 4: Call the function using useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  // Mission 5: Refresh button
  function handleRefresh() {
    fetchUsers();
  }

  return (
    <main>
      <h1>Random User Directory</h1>

      {/* Display loading message */}
      {isLoading && <p>Loading users...</p>}

      {/* Display error message */}
      {error && <p>Error: {error}</p>}

      {/* Display Refresh button */}
      <button onClick={handleRefresh} disabled={isLoading}>
        {isLoading ? "Refreshing..." : "Refresh"}
      </button>

      {/* Display users */}
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <h2>
              {user.name.first} {user.name.last}
            </h2>

            <p>{user.email}</p>

            {/* Mission 6: Display city */}
            <p>City: {user.location.city}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;