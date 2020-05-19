import { StyleSheet } from 'react-native';
import { Color } from '../../styles'

const styles = StyleSheet.create({
  drawerItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
  },
  heading: {
    ...Color.caption,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 25,
    borderBottomColor: Color.background.color,
    borderBottomWidth: 2,
  },
  caption: {
    marginHorizontal: 20,
    marginVertical: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  drawerLabel: {
    color: '#000',
    width: '100%',
  },
  divider: {
    height: 1,
  }
});

export default styles;