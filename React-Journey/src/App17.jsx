import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { ThemeProvider } from "./context/ThemeContext";

function App() {

  return (
    <ThemeProvider>

      <div>
        <Navbar />

        <hr />

        <Profile />
      </div>

    </ThemeProvider>
  );
}

export default App;