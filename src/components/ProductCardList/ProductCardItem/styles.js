import { StyleSheet } from 'react-native';
import { baseBgColor, baseBorderColor } from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: baseBgColor,
    borderColor: baseBorderColor,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  img: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  noProduct: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  priceText: {
    fontWeight: 'bold',
  },
});
