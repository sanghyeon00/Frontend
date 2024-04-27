// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const login = () => {
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

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, refreshToken, login, logout, setTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
//여기서 전역으로 토큰 and 로그인정보 사용