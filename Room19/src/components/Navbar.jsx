import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        About
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
        Services
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
        Contact
      </NavLink>
      <span>Current Theme: {theme}</span>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;