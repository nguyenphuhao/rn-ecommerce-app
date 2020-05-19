export const mapProductList = (product) => {
  const { id, cell } = product;
  return {
    id,
    ...cell,
    currency: cell.currency_code,
  };
};
