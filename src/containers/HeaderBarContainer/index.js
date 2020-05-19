import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../../components/HeaderBar';
import { useHeader } from '../../hooks';

const HeaderBarContainer = ({ scene }) => {
  const { canGoBack, pressBack, pressSearch, pressCart } = useHeader();
  const {
    backVisible = true,
    searchVisible = true,
    cartVisible = true,
    title = '',
  } = scene.descriptor.options;
  return (
    <HeaderBar
      backVisible={backVisible && canGoBack}
      searchVisible={searchVisible}
      cartVisible={cartVisible}
      title={title}
      onPressBack={pressBack}
      onPressSearch={pressSearch}
      onPressCart={pressCart}
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
      }),
    }),
  }),
};

export default HeaderBarContainer;
