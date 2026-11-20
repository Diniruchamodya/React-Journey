import { useContext } from "react";
import { AuthContext } from "../context/AuthContex";

function Admin() {
  const { logout } = useContext(AuthContext);

  return (
    <main>
      <h1>Admin-only page</h1>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </main>
  );
}

export default Admin;