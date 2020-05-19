import unescape from 'lodash/unescape';

export const mapCategoryList = (category) => {
  return {
    ...category,
    id: category.category_id,
    name: unescape(category.name),
  };
};
