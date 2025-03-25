import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("darkTheme") === "true"; // Load from localStorage
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("darkTheme", isDarkTheme); // Save preference
  }, [isDarkTheme]);

  const toggleTheme = (event) => {
    event.preventDefault();
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return { isDarkTheme, toggleTheme };
};

export default useTheme;
