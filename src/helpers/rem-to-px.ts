export const remToPx = (rem: number): number => {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 10;

  return rem * rootFontSize;
};
