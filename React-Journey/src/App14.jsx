import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


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

  const loadMoreUsers = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Mission 3 & 4: Filter users here
  const filteredUsers = users.filter((user)=>
        user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())        
);  

  return (
    <main>
      <h1>Random User Directory</h1>

      {/* Mission 2: Search input */}
      <input type = "text" placeholder="Search users..." value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>


      {isLoading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}

      
        {/* Display filtered users here */}
        <ul>
            {filteredUsers.map((user, index) => (
                <li key = {user.login.uuid}>{user.name.first} {user.name.last}</li>
            ))}
        </ul>
        

      {/* Mission 5: No Users Found message */}
      {filteredUsers.length === 0 && !isLoading && (
        <p>No users found.</p>
      )}

      {/* Mission 6: Clear Search button */}
      {searchTerm && (
        <button onClick={() => setSearchTerm("")}>
          Clear Search
        </button>
      )}

      <button onClick={loadMoreUsers} disabled={isLoading}>
        Load More
      </button>
    </main>
  );
}

export default App;