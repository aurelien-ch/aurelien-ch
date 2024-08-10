export const formatAddress = (address: string) => {
  if (address.length <= 10) {
    return address;
  }

  const start = address.substring(0, 5);
  const end = address.substring(address.length - 4);

  return `${start}...${end}`;
};
