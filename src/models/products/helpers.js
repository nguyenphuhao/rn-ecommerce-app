export const mapProductList = (product) => {
  const { id, cell } = product;
  return {
    id,
    ...cell,
    currency: cell.currency_code,
  };
};

export const mapProductListByCates = (data) => {
  const { category, productList } = data;
  const products = productList.map(mapProductList);
  return {
    category,
    productList: products,
  };
};
