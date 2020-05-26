import React, { useCallback } from 'react';
import { Spinner, Toast } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import CategoryList from '../../components/CategoryList';
import useCategoryList from '../../hooks/useCategoryList';
import { ProductListStackScreen } from '../../constants/screens';

const CategoryListContainer = () => {
  const { navigate } = useNavigation();
  const {
    categoryList,
    categoryListLoading,
    categoryListError,
  } = useCategoryList();

  const showError = (error) => {
    if (error) {
      const { errorCode, errorMsg } = error;
      setTimeout(() => {
        Toast.show({
          text: `Error code: ${errorCode} - ${errorMsg} `,
          buttonText: 'OK',
          type: 'danger',
          duration: 3000,
        });
      }, 100);
    }
  };

  const handleSelectItem = useCallback(
    (category) => {
      navigate(ProductListStackScreen, { category });
    },
    [categoryList],
  );
  return (
    <>
      {categoryListLoading ? (
        <Spinner />
      ) : (
        <>
          {showError(categoryListError)}
          <CategoryList data={categoryList} onSelectItem={handleSelectItem} />
        </>
      )}
    </>
  );
};

export default CategoryListContainer;
