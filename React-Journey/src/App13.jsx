import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mission 2: Fetch users using the current page
  async function fetchUsers() {
    setIsLoading(true);
    setError(null);

    const url = `https://randomuser.me/api/?results=5&page=${page}`;
    try{
       const response = await fetch(url);
       if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }
      const data = await response.json();
       setUsers((previousUsers) => [
      ...previousUsers,
      ...data.results
      
    }catch (err) {
        setError(err.message || "Something went wrong.");
    }finally {
      setIsLoading(false);
    }
  }

  // Mission 3: Append new users to existing users
    useEffect(() => {
      fetchUsers();
    }, [page]);

  // Mission 4: Create Load More functionality
  const loadMoreUsers = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <main>
      <h1>Random User Directory</h1>

      {isLoading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
            <p>City: {user.location.city}</p>
          </li>
        ))}
      </ul>

      <button onClick={loadMoreUsers} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </main>
  );
}

export default App;