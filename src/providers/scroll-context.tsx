import { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext<number>(0);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <ScrollContext.Provider value={scrollY}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => useContext(ScrollContext);
