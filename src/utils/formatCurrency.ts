const formatCurrency = (currency: number) =>
  currency.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export default formatCurrency;
