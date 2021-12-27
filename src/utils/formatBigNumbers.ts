export const formatBigNumbers = (num?: number) => {
  return num && num > 9 ? "+9" : num;
};
