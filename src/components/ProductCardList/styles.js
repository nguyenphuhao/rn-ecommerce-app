import { StyleSheet, Dimensions } from 'react-native';
import {
  baseBgColor,
  baseBorderColor,
  highlightColor,
  baseFontSize,
} from '../../constants/styles';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: baseBgColor,
    borderColor: baseBorderColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  headerText: {
    marginLeft: 10,
    color: highlightColor,
    fontSize: baseFontSize,
  },
  viewAllButton: {
    marginRight: 10,
  },
  viewAllText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
