const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatAmount = (value) => formatter.format(parseFloat(value) || 0);

export default formatAmount;
