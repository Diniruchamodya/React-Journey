import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  // Mission 1: Create debouncedSearch state here

  async function fetchUsers() {
    setIsLoading(true);
    setError(null);

    const url = `https://randomuser.me/api/?results=5&page=${page}&seed=reactHack`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch users.");
      }

      const data = await response.json();

      setUsers((previousUsers) => [
        ...previousUsers,
        ...data.results,
      ]);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [page]);

  // Mission 2, 3 and 4:
  // Implement the debounce useEffect here.
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);


  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(
      debouncedSearch.toLowerCase()
    ) ||
    user.name.last.toLowerCase().includes(
      debouncedSearch.toLowerCase()
    ) ||
    user.email.toLowerCase().includes(
      debouncedSearch.toLowerCase()
    )
  );

  const loadMoreUsers = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <main>
      <h1>Random User Directory</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Mission 6: Display search status here */}
      {debouncedSearch && (
        <p>Searching for: {debouncedSearch}</p>
      )}

      {isLoading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last}
            <p>{user.email}</p>
          </li>
        ))}
      </ul>

      {filteredUsers.length === 0 && !isLoading && (
        <p>No users found.</p>
      )}

      <button onClick={() => setSearchTerm("")}>
        Clear Search
      </button>

      <button onClick={loadMoreUsers} disabled={isLoading}>
        Load More
      </button>
    </main>
  );
}

export default App;