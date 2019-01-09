export const toUSD = amount => {
  amount => {
    if (amount) {
      let string = amount.toString();
      const dollars = string.slice(0, -2);
      const cents = string.slice(-2);
      return `$${dollars}.${cents}`;
    }
  };
};
