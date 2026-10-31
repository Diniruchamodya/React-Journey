function App() {
  const name = "Diniru";
  const degree = "Industrial Information Technology";
  const language = "Java";
  const level = 1;

  return (
    <main>
      <h1>Welcome to ReactHack!</h1>
      <h2>{name}</h2>
      <p>{degree}</p>
      <p>Favourite language: {language}</p>
      <h3>Level: {level}</h3>
      <button>Start My Journey</button>
    </main>
  );
}

export default App;