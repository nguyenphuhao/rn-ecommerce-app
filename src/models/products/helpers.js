import { ALL } from '../../constants';

const hasCategory = (categoryId, ids) => {
  // Category = ALL => return all product. Otherwise, return following product name
  return categoryId === ALL || (ids ? ids.indexOf(categoryId) !== -1 : false);
};

const hasProductName = (productName, product) => {
  // Filter by Name or Price
  return product.name
    ? product.name.toUpperCase().includes(productName.toUpperCase()) ||
        product.price.toString().includes(productName)
    : true;
};

export const filterProducts = (criteria) => (product) => {
  const { categoryId, productName } = criteria;
  const { categoriesId } = product;
  const categoryFilter = hasCategory(categoryId, categoriesId);
  const productNameFilter = hasProductName(productName, product);
  return categoryFilter && productNameFilter;
};

export const mapProducts = (product) => {
  const { images } = product || {};
  const image = images && images.length && images[0];
  return {
    ...product,
    image,
  };
};
