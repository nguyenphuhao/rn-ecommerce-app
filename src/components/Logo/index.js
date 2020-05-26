/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../../assets/images/abante-logo.png')}
    />
  );
};

export default Logo;
