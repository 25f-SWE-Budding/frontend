import { useState, useEffect } from 'react';

const USER_ID_KEY = 'userId';
const TOKEN_KEY = 'authToken';
const USER_INFO_KEY = 'userInfo';

export const useAuth = () => {
  const [userId, setUserIdState] = useState(() => {
    const stored = localStorage.getItem(USER_ID_KEY);
    return stored ? parseInt(stored, 10) : null;
  });

  const [token, setTokenState] = useState(() => {
    return localStorage.getItem(TOKEN_KEY);
  });

  const [userInfo, setUserInfoState] = useState(() => {
    const stored = localStorage.getItem(USER_INFO_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  // 로그인 상태 확인
  const isAuthenticated = Boolean(token && userId);

  // 로그인
  const login = (id, authToken, info = null) => {
    setUserIdState(id);
    setTokenState(authToken);
    setUserInfoState(info);
    
    localStorage.setItem(USER_ID_KEY, id.toString());
    localStorage.setItem(TOKEN_KEY, authToken);
    if (info) {
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(info));
    }
  };

  // 로귵58웃
  const logout = () => {
    setUserIdState(null);
    setTokenState(null);
    setUserInfoState(null);
    
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_INFO_KEY);
  };

  // userId 업데이트 함수 (호환성)
  const setUserId = (id) => {
    setUserIdState(id);
    localStorage.setItem(USER_ID_KEY, id.toString());
  };

  return { 
    userId, 
    token,
    userInfo,
    isAuthenticated,
    setUserId, 
    login, 
    logout 
  };
};
