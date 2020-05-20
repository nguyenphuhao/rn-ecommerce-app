/* eslint-disable camelcase */
import unescape from 'lodash/unescape';

export const mapCategoryList = (category) => {
  const { category_id, thumb, name } = category;
  return {
    id: category_id,
    thumb,
    name: unescape(name),
  };
};
