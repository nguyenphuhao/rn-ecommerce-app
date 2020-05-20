/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Text, Icon, Left, Body } from 'native-base';
import styles from './styles';

const MenuItem = ({ type, name, text, onPress }) => {
  return (
    <ListItem noBorder icon onPress={onPress}>
      <Left>
        <Icon style={styles.icon} type={type} name={name} />
      </Left>
      <Body>
        <Text style={styles.bodyText}>{text}</Text>
      </Body>
    </ListItem>
  );
};

MenuItem.defaultProps = {
  type: 'Ionicons',
  onPress: () => {},
};

MenuItem.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
export default MenuItem;
