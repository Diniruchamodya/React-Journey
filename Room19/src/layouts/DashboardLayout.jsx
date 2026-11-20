import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";

function DashboardLayout() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <header>
        <h1>LensCraft Dashboard</h1>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </header>
      <main>
       <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/dashboard/bookings">My Bookings</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;