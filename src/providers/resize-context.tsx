import { createContext, useContext, useState, useEffect } from "react";

import { sizes } from "@/utils/responsive";

type ResizeContextType = {
  isMobile: boolean;
};

const ResizeContext = createContext<ResizeContextType | null>(null);

export const ResizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= sizes.tablet);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <ResizeContext.Provider value={{ isMobile }}>{children}</ResizeContext.Provider>;
};

export const useResize = (): ResizeContextType => {
  const context = useContext(ResizeContext);

  if (context === null) {
    throw new Error("useResize must be used within a ResizeProvider");
  } else {
    return context;
  }
};
