import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import DeviceSettings from 'react-native-device-settings';
import styles from './styles';

const Connectivity = () => {
  const [connectionStatus, setConnectionStatus] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((s) => {
      if (connectionStatus !== s.isConnected) {
        if (!s.isConnected) {
          Alert.alert(
            'No Internet Connection',
            'Please turn on your Wifi or Mobile data',
            [
              {
                text: 'OK',
                onPress: () => {},
              },
              {
                text: 'Turn on',
                onPress: () => {
                  DeviceSettings.wifi();
                },
              },
            ],
          );
        }
        setConnectionStatus(s.isConnected);
      }
    });
    return function cleanup() {
      unsubscribe();
    };
  }, [connectionStatus]);

  return (
    <>
      {!connectionStatus && (
        <View style={styles.container}>
          <Text style={styles.message}>No Internet Connection</Text>
        </View>
      )}
    </>
  );
};
export default Connectivity;
