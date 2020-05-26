import { StyleSheet } from 'react-native';
import { dangerColor, baseFontColor } from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dangerColor,
  },
  message: {
    color: baseFontColor,
  },
});

export default styles;
