import { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import { Navigate, Outlet } from "react-router-dom";

function RoleBasedProtectedRoute({ allowedRoles }) {
  const { user } = useContext(AuthContext);


  console.log("RBAC User:", user);
  console.log("RBAC Role:", user?.role);
  console.log("Allowed Roles:", allowedRoles);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default RoleBasedProtectedRoute;