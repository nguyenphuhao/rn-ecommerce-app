import { StyleSheet } from 'react-native';
import { baseBorderColor } from '../../../constants/styles';

export default StyleSheet.create({
  cateItem: {
    paddingTop: 10,
    paddingBottom: 90,
    alignItems: 'center',
    width: 100,
  },
  cateImg: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: baseBorderColor,
    borderRadius: 100,
  },
  cateName: {
    textAlign: 'center',
    marginTop: 3,
  },
});
