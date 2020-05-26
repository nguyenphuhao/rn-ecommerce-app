import { Toast } from 'native-base';

const duration = 2000;
const buttonText = 'OK';
const useToast = () => {
  const showErrorToast = (error) => {
    if (error) {
      const { errorCode, errorMsg } = error;
      setTimeout(() => {
        Toast.show({
          text: `Error code: ${errorCode} - ${errorMsg} `,
          buttonText,
          type: 'error',
          duration,
        });
      }, 100);
    }
  };

  const showWarningToast = (msg) => {
    if (msg) {
      setTimeout(() => {
        Toast.show({
          text: msg,
          buttonText,
          type: 'warning',
          duration,
        });
      }, 100);
    }
  };

  const showSuccessToast = (msg) => {
    if (msg) {
      setTimeout(() => {
        Toast.show({
          text: msg,
          buttonText,
          type: 'success',
          duration,
        });
      }, 100);
    }
  };

  const showToast = (msg) => {
    if (msg) {
      setTimeout(() => {
        Toast.show({
          text: msg,
          buttonText,
          duration,
        });
      }, 100);
    }
  };
  return {
    showErrorToast,
    showWarningToast,
    showSuccessToast,
    showToast,
  };
};

export default useToast;
