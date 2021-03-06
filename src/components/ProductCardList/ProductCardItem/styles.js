import { StyleSheet } from 'react-native';
import { baseBgColor, baseBorderColor } from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 0.5,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: baseBgColor,
    borderColor: baseBorderColor,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    paddingBottom: 30,
    marginHorizontal: 10,
    marginVertical: 5,
    position: 'relative',
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
  addCart: {
    width: '40%',
    alignSelf: 'flex-end',
    marginRight: 10,
    position: 'absolute',
    bottom: 10,
    right: 5,
  },
});
