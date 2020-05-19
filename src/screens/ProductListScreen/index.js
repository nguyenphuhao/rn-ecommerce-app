import React, { useEffect } from 'react';
import { Container } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProductListContainer } from '../../containers';

const ProductListScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { category } = params;
  useEffect(() => {
    navigation.setOptions({
      title: category.name,
    });
  }, []);
  return (
    <Container>
      <ProductListContainer categoryId={category.id} />
    </Container>
  );
};

export default ProductListScreen;
