import { StyleSheet } from 'react-native';
import { baseBgColor, baseBorderColor } from '../../../constants/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: baseBgColor,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderColor: baseBorderColor,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    width: '50%',
  },
});
