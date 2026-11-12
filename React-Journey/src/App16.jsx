import useFetch from "./hooks/useFetch";

function App() {

  // Mission 7: Use your custom hook here
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <main>
      <h1>Custom Hook User Directory</h1>

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error state */}
      {error && <p>Error: {error}</p>}

      {/* Display users */}
      {!loading && !error && (
        <ul> 
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;