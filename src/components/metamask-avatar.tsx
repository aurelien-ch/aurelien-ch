import { useEffect, useState } from "react";
import { MetaMaskAvatar as ReactMetamaskAvatar } from "react-metamask-avatar";

import { remToPx } from "@/helpers/rem-to-px";

interface Props {
  address: string;
  size: number;
  style?: React.CSSProperties;
}

const MetamaskAvatar = (p: Props) => {
  const [avatarSize, setAvatarSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setAvatarSize(remToPx(p.size));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [p.size]);

  return (
    <div style={p.style}>
      <ReactMetamaskAvatar address={p.address} size={avatarSize} />
    </div>
  );
};

export default MetamaskAvatar;
