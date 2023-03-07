const resp = (size: number) => {
  // If viewport height is smaller than half of viewport width
  if (window.innerWidth / window.innerHeight > 2) {
    return `${size * 1.75}vh`;
  } else {
    return `${size}vw`;
  }
};


export default resp;