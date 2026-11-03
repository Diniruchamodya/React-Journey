
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  // Mission 1: Create a function to fetch users
  async function fetchUsers(){
       setIsLoading(true);
       setError(null);
       try{
        const response = await fetch("https://randomuser.me/api/?results=5");
        if(response.ok){
            const data = await response.json();
            setUsers(data.results);
            setIsLoading(false);
        }

       }catch(error){
        setError(error.message || "Something went wrong.");
        setIsLoading(false);
       }
  }

  // Mission 1: Call the function using useEffect
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
      <button onClick={handleRefresh}>Refresh</button>

      {/* Display users using map() */}
      <ul>
        {users.map((user, index)=>(
            <li key={index}>
              <h2>{user.name.first} {user.name.last}</h2>
              <p>{user.email}</p>
            </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
