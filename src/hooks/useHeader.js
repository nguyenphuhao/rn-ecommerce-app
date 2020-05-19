import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

const useHeader = () => {
  const { goBack, canGoBack } = useNavigation();

  const pressBack = useCallback(() => {
    goBack();
  }, []);

  const pressSearch = useCallback(() => {
    console.log('pressSearch');
  }, []);

  const pressCart = useCallback(() => {
    console.log('pressCart');
  }, []);

  return {
    canGoBack: canGoBack(),
    pressBack,
    pressSearch,
    pressCart,
  };
};

export default useHeader;
