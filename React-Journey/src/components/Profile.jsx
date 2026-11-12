import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Profile() {

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>User Profile</h2>

      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Profile;