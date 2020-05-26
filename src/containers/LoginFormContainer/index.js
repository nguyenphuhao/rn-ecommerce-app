import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../../components/LoginForm';
import { useAuthentication, useToast } from '../../hooks';

const LoginFormContainer = () => {
  const { navigate } = useNavigation();
  const { showToast } = useToast();
  const { login, authLoading, authError } = useAuthentication();
  return (
    <>
      {showToast(authError && 'Username or Password is not correct!')}
      <LoginForm
        isLoading={authLoading}
        onPressForgotPassword={() => {}}
        onPressSignIn={({ error, username, password }) => {
          if (!error) {
            login(username, password);
          } else {
            showToast('Please enter username and password!');
          }
        }}
        onPressSignUp={() => navigate()}
        onPressSkip={() => navigate()}
      />
    </>
  );
};

export default LoginFormContainer;
