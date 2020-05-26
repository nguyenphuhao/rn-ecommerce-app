import React from 'react';
import { Container, Content } from 'native-base';
import { SearchInputContainer, CategoryListContainer } from '../../containers';
import ProductCardListContainer from '../../containers/ProductCardListContainer';

const HomeScreen = () => {
  return (
    <Container>
      <Content>
        <SearchInputContainer />
        <CategoryListContainer />
        <ProductCardListContainer />
      </Content>
    </Container>
  );
};

export default HomeScreen;
