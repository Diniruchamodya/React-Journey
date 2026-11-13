import Navbar from "../../Room19/src/components/Navbar";
import Profile from "../../Room19/src/components/Profile";
import { ThemeProvider } from "../../Room19/src/context/ThemeContext";

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