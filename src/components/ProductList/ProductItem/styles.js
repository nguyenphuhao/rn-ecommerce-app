import { StyleSheet } from 'react-native';
import { baseBorderColor } from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: baseBorderColor,
    borderBottomWidth: 1,
  },
  imgContainer: {
    flex: 1,
  },
  img: {
    padding: 10,
    width: 70,
    height: 70,
    marginLeft: 20,
    marginVertical: 10,
  },
  info: {
    paddingVertical: 10,
    flex: 2,
  },
  name: {
    flex: 0.5,
  },
  priceContainer: {
    flex: 2,
  },
  currentPrice: {
    fontWeight: 'bold',
  },
  oldPrice: {},
  discount: {},
});
