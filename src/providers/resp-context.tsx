import { createContext, useContext, useState, useEffect } from "react";

import { sizes } from "@/utils/responsive";

const RespContext = createContext<boolean>(false);

export const RespProvider = ({ children }: { children: React.ReactNode }) => {
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

  return <RespContext.Provider value={isMobile}>{children}</RespContext.Provider>;
};

export const useResp = () => useContext(RespContext);
