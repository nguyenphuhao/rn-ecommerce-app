import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../../components/HeaderBar';
import { useHeader } from '../../hooks';

const HeaderBarContainer = ({ scene }) => {
  const {
    canGoBack,
    pressBack,
    pressSearch,
    pressCart,
    pressMenu,
  } = useHeader();
  const {
    backVisible = true,
    searchVisible = true,
    cartVisible = true,
    menuVisible = false,
    title = '',
  } = scene.descriptor.options;
  return (
    <HeaderBar
      menuVisible={menuVisible}
      backVisible={backVisible && canGoBack}
      searchVisible={searchVisible}
      cartVisible={cartVisible}
      title={title}
      onPressBack={pressBack}
      onPressSearch={pressSearch}
      onPressCart={pressCart}
      onPressMenu={pressMenu}
    />
  );
};

HeaderBarContainer.defaultProps = {
  scene: {
    descriptor: {
      options: {
        title: '',
        backVisible: true,
        searchVisible: true,
        cartVisible: true,
        menuVisible: false,
      },
    },
  },
};

HeaderBarContainer.propTypes = {
  scene: PropTypes.shape({
    descriptor: PropTypes.shape({
      options: PropTypes.shape({
        title: PropTypes.string,
        backVisible: PropTypes.bool,
        searchVisible: PropTypes.bool,
        cartVisible: PropTypes.bool,
        menuVisible: PropTypes.bool,
      }),
    }),
  }),
};

export default HeaderBarContainer;
