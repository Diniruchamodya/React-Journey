import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <h2>My Application</h2>

      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;