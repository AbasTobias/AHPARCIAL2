import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  // Función para verificar si el token ha expirado
  const isTokenExpired = (token) => {
    if (!token) return true;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      return payload.exp < currentTime;
    } catch (error) {
      console.error("Error al decodificar token:", error);
      return true;
    }
  };

  // Verificar token al cargar la aplicación
  useEffect(() => {
    if (token && isTokenExpired(token)) {
      console.log("Token expirado, cerrando sesión");
      logout();
    }
  }, [token]);

  const login = (userData, userToken) => {
    // Verificar que el token no esté expirado antes de guardarlo
    if (isTokenExpired(userToken)) {
      console.error("Token recibido ya está expirado");
      return false;
    }

    setUser(userData);
    setToken(userToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userToken);
    console.log("¡Login exitoso!");
    return true;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    console.log("Sesión cerrada");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      login, 
      logout, 
      isTokenExpired: () => isTokenExpired(token) 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };