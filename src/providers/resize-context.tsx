import { createContext, useContext, useState, useEffect } from "react";

import { sizes } from "@/utils/responsive";

const ResizeContext = createContext<{ isMobile: boolean }>({ isMobile: false });

export const ResizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < sizes.tablet);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <ResizeContext.Provider value={{ isMobile }}>{children}</ResizeContext.Provider>;
};

export const useResize = () => useContext(ResizeContext);
