import { useState, useEffect } from 'react';

const USER_ID_KEY = 'userId';
const DEFAULT_USER_ID = 1; // 테스트용 기본값

export const useAuth = () => {
  const [userId, setUserIdState] = useState(() => {
    // 초기화: 로컬스토리지에서 userId 가져오기
    const stored = localStorage.getItem(USER_ID_KEY);
    return stored ? parseInt(stored, 10) : DEFAULT_USER_ID;
  });

  // userId 업데이트 함수
  const setUserId = (id) => {
    setUserIdState(id);
    localStorage.setItem(USER_ID_KEY, id.toString());
  };

  // 로그인
  const login = (id) => {
    setUserId(id);
  };

  // 로그아웃
  const logout = () => {
    localStorage.removeItem(USER_ID_KEY);
    setUserIdState(DEFAULT_USER_ID);
  };

  return { userId, setUserId, login, logout };
};
