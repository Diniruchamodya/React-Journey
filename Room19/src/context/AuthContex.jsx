import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("lenscraft-user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    sessionStorage.setItem("lenscraft-user", JSON.stringify(userData));
    setUser(userData);
  };
  const logout = () => {
    sessionStorage.removeItem("lenscraft-user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
       {children}
    </AuthContext.Provider>
  );
};

    