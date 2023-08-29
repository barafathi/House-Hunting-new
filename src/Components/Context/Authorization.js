import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState();
  

  useEffect(() => {
    (async () => {
      try {
        setError(null);

      } catch (err) {
     if (err.response.status === 401) {
          setIsAuth(false);
        } else {
          const data = await response.json();
          setError(data.message || "internal server error");
        }      }
    })();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;