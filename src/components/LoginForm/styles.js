import { StyleSheet } from 'react-native';
import { primaryColor, baseFontColor, blurColor } from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  logo: {
    borderWidth: 1,
  },
  headerText: {
    color: baseFontColor,
    textAlign: 'center',
  },
  form: {
    width: 330,
    paddingHorizontal: 10,
    backgroundColor: blurColor,
    paddingVertical: 15,
    borderRadius: 10,
  },
  input: {
    color: baseFontColor,
  },
  item: {
    marginBottom: 10,
    color: '#fff',
  },
  label: {
    color: baseFontColor,
  },
  signInText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  forgot: {
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    color: baseFontColor,
    textDecorationLine: 'underline',
  },
  signUp: {
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    color: baseFontColor,
    textDecorationLine: 'underline',
  },
  skipLogin: {
    marginTop: 20,
  },
});
