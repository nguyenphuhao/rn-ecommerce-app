import React from 'react';
import { Container, Content } from 'native-base';
import { SearchInputContainer, CategoryListContainer } from '../../containers';

const HomeScreen = () => {
  return (
    <Container>
      <Content>
        <SearchInputContainer />
        <CategoryListContainer />
      </Content>
    </Container>
  );
};

export default HomeScreen;
