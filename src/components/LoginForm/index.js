import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Item, Input, Button, H1, Icon, Text, Spinner } from 'native-base';
import isEmpty from 'lodash/isEmpty';
import Logo from '../Logo';
import styles from './styles';
import { baseFontColor } from '../../constants/styles';

const LoginForm = ({
  onPressSignIn,
  onPressForgotPassword,
  onPressSignUp,
  isLoading,
}) => {
  const defaultValidation = {
    hasError: false,
    userNameBlank: true,
    passwordBlank: true,
  };
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [validationForm, setValidationForm] = useState(defaultValidation);

  const validate = () => {
    const validation = { ...defaultValidation };
    if (isEmpty(username)) {
      validation.userNameBlank = false;
    } else {
      validation.userNameBlank = true;
    }
    if (isEmpty(password)) {
      validation.passwordBlank = false;
    } else {
      validation.passwordBlank = true;
    }
    validation.hasError =
      !validation.passwordBlank || !validation.userNameBlank;
    setValidationForm(validation);
    return validation;
  };

  const handleSignIn = () => {
    const validation = validate();
    onPressSignIn({
      error: validation.hasError,
      username,
      password,
    });
  };

  const getValidation = (key) => {
    if (!validationForm) {
      return true;
    }
    return validationForm[key];
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.Os === 'ios' ? 'padding' : null}
    >
      <View style={styles.header}>
        <Logo style={styles.logo} />
        <H1 style={styles.headerText}>Ecommerce Store</H1>
      </View>
      <View style={styles.form}>
        <Item style={styles.item} error={!validationForm.userNameBlank}>
          <Icon style={styles.label} type="Entypo" active name="user" />
          <Input
            placeholder="Username"
            style={styles.input}
            onEndEditing={validate}
            onChangeText={setUserName}
            clearButtonMode="always"
            placeholderTextColor={baseFontColor}
          />
        </Item>
        <Item style={styles.item} error={!getValidation('passwordBlank')}>
          <Icon style={styles.label} type="Entypo" active name="key" />
          <Input
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onEndEditing={validate}
            onChangeText={setPassword}
            clearButtonMode="always"
            placeholderTextColor={baseFontColor}
          />
        </Item>
        <Button onPress={handleSignIn} block info>
          {isLoading ? <Spinner color="white" /> : <Text>Sign In</Text>}
        </Button>
        <Text onPress={onPressForgotPassword} style={styles.forgot}>
          Forgot Password?
        </Text>
        <Text onPress={onPressSignUp} style={styles.signUp}>
          New here? Sign Up
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

LoginForm.propTypes = {
  onPressSignIn: PropTypes.func.isRequired,
  onPressForgotPassword: PropTypes.func.isRequired,
  onPressSignUp: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default LoginForm;
