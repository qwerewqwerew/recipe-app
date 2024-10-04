import { createContext, useState } from 'react';

// ThemeContext 생성
export const ThemeContext = createContext();

// ThemeProvider 컴포넌트 - 전역 색상 테마 관리
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // 테마를 토글하는 함수
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
