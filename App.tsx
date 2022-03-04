import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Screens/Home';
import messaging from '@react-native-firebase/messaging';

LogBox.ignoreLogs(["Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."])

export default function App() {

  async function token(){
    messaging().getToken().then((token) => console.log(token));
  };

  useEffect(() => {token();}, []);

  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
