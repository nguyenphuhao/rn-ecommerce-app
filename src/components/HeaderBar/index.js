import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Button, Icon, Right, Body, Title } from 'native-base';

const HeaderBar = ({
  menuVisible,
  backVisible,
  searchVisible,
  cartVisible,
  title,
  onPressBack,
  onPressSearch,
  onPressCart,
  onPressMenu,
}) => {
  return (
    <Header>
      <Left>
        {backVisible && (
          <Button transparent onPress={onPressBack}>
            <Icon name="ios-arrow-back" />
          </Button>
        )}
        {menuVisible && (
          <Button transparent onPress={onPressMenu}>
            <Icon name="ios-menu" />
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
  onPressMenu: () => {},
};

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
  backVisible: PropTypes.bool.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  cartVisible: PropTypes.bool.isRequired,
  menuVisible: PropTypes.bool.isRequired,
  onPressBack: PropTypes.func,
  onPressSearch: PropTypes.func,
  onPressCart: PropTypes.func,
  onPressMenu: PropTypes.func,
};
export default HeaderBar;
