import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure this runs only in the browser
    setIsMounted(true);

    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(storedTheme || systemTheme);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  if (!isMounted) return null; // Avoid SSR issues

  return (
    <button
      className="button is-light theme-toggle-button"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        padding: "0.4rem",
        borderRadius: "70%",
        border: "none",
        background: "var(--bulma-primary-bold)",
        color: "var(--bulma-text-soft)",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;