// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    userNameGet();
  }, [accessToken]);

  const login = async () => {
    // 로그인 로직 성공 시
    setIsLoggedIn(true);
  };

  const logout = () => {
    // 로그아웃 로직
    setIsLoggedIn(false);
  };

  const setTokens = (access, refresh) => {
    setAccessToken(access);
    setRefreshToken(refresh);
  };

  const userNameGet = async () => {

    if(accessToken != null){
      try {
        const response = await fetch(`${process.env.REACT_APP_Server_IP}/name_check/`, { 
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.name);
        } 
        else {
          console.error("Failed to fetch userName:", response.statusText);
        }  
      }
      catch (error) {
        console.error("Error:", error);
      }
    }
    else{
      console.log("nonononono");
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, refreshToken, user, login, logout, setTokens, userNameGet}}>
      {children}
    </AuthContext.Provider>
  );
};
//여기서 전역으로 토큰 and 로그인정보 사용