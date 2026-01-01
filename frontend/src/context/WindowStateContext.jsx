import React, { createContext, useContext, useEffect, useState } from "react";

const WindowStateContext = createContext(null);

export const WindowStateProvider = ({ children }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // When window is maximized (approx logic)
      setIsMaximized(window.innerWidth >= screen.availWidth - 10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowStateContext.Provider value={{ isMaximized }}>
      {children}
    </WindowStateContext.Provider>
  );
};

export const useWindowState = () => {
  const context = useContext(WindowStateContext);
  if (!context) {
    throw new Error(
      "useWindowState must be used inside WindowStateProvider"
    );
  }
  return context;
};
