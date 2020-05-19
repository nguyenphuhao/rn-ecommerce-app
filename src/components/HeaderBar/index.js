import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Button, Icon, Right, Body, Title } from 'native-base';

const HeaderBar = ({
  backVisible,
  searchVisible,
  cartVisible,
  title,
  onPressBack,
  onPressSearch,
  onPressCart,
}) => {
  console.log(backVisible);
  return (
    <Header>
      <Left>
        {backVisible && (
          <Button transparent onPress={onPressBack}>
            <Icon name="ios-arrow-back" />
          </Button>
        )}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        {searchVisible && (
          <Button transparent onPress={onPressSearch}>
            <Icon name="ios-search" />
          </Button>
        )}
        {cartVisible && (
          <Button transparent onPress={onPressCart}>
            <Icon type="AntDesign" name="shoppingcart" />
          </Button>
        )}
      </Right>
    </Header>
  );
};

HeaderBar.defaultProps = {
  onPressBack: () => {},
  onPressSearch: () => {},
  onPressCart: () => {},
};

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
  backVisible: PropTypes.bool.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  cartVisible: PropTypes.bool.isRequired,
  onPressBack: PropTypes.func,
  onPressSearch: PropTypes.func,
  onPressCart: PropTypes.func,
};
export default HeaderBar;
