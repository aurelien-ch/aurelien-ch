export const sizes = {
  mobile: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  laptop: `(max-width: ${sizes.laptop}px)`,
};

export const resp = (size: number) => {
  if (window.innerWidth / window.innerHeight > 2) {
    // If viewport height is smaller than half of viewport width
    return `${size * 1.75}vh`;
  } else {
    if (window.innerHeight > window.innerWidth) {
      return `${size}vh`;
    } else {
      return `${size}vw`;
    }
  }
};