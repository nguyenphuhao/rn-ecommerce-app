import { useCallback } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const useHeader = () => {
  const { goBack, canGoBack, dispatch } = useNavigation();

  const pressBack = useCallback(() => {
    goBack();
  }, []);

  const pressSearch = useCallback(() => {}, []);

  const pressCart = useCallback(() => {}, []);

  const pressMenu = useCallback(() => {
    dispatch(DrawerActions.openDrawer());
  }, []);

  return {
    canGoBack: canGoBack(),
    pressBack,
    pressSearch,
    pressCart,
    pressMenu,
  };
};

export default useHeader;
