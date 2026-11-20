import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";

function Login() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>LensCraft Login</h1>

      {user === null ? (
        <button
          type="button"
          onClick={() =>
            login({
              name: "Diniru",
              email: "diniru@example.com",
              role: "admin",
            })  
          }
        >
          Login
        </button>
      ) : (
        <>
          <Link to="/dashboard">Go to Dashboard</Link><br />
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Login;