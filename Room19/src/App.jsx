import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DashboardHome from "./pages/dashboard/DashboardHome";
import MyBookings from "./pages/dashboard/Mybookings";
import DashboardProfile from "./pages/dashboard/Profile";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleBasedProtectedRoute from "./routes/RoleBasedRoute";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pages/Login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="profile" element={<DashboardProfile />} />
        </Route>
      </Route>
     <Route element={<RoleBasedProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;


