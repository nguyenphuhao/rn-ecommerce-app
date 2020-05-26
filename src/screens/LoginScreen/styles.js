import { StyleSheet } from 'react-native';
import { primaryColor, baseFontColor } from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  headerText: {
    color: baseFontColor,
  },
});
