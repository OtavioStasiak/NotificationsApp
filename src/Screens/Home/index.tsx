import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LottieView from 'lottie-react-native';

import { ButtonSend } from '../../Components/ButtonSend';
import { ModalView } from '../../Components/ModalView';

import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { SendMessageServerless } from '../../Services/SendMessageServerless';

import { styles } from './styles';

export function Home(){

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [remoteMessage, setRemoteMessage] = useState('');

    const remoteMessageJson = remoteMessage !== '' ? JSON.parse(remoteMessage) : '';
    const [titleServer, setTitleServer] = useState('');
    const [messageServer, setMessageServer] = useState('');

    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    
    async function onDisplayNotification() {
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        await notifee.displayNotification({
          title: title,
          body: message,
          android: {
            channelId,
            smallIcon: 'ic-launcher', 
          },
        });
      }

      async function requestUserPermission() {

        const authStatus = await messaging().requestPermission();
        };
   
      async function SendNotification() {
        const channelId = await notifee.createChannel({
          id: 'ChannelII',
          name: 'Default ChannelII',
        });
        
        if(remoteMessage !== ''){
        notifee.displayNotification({
          title: remoteMessageJson.notification.title,
          body: remoteMessageJson.notification.body,
          android: {
            channelId
          }
        }).then(() => setVisible(true))
      };
        setRemoteMessage('');
      }
    
    useEffect(() => { requestUserPermission(); const unsubscribe =  messaging()
      .onMessage(remoteMessage => setRemoteMessage(JSON.stringify(remoteMessage)))}, []);
    useEffect(() => {SendNotification();},[remoteMessageJson]);

    function sendLocalNotification(){
      
        setLoading(true);

        onDisplayNotification()
        .then(() => setLoading(false))
        .catch(error => console.log(error))
        .finally(() => setVisible(true));
        
    };

    function SendServerlessNotification(){
      SendMessageServerless(title, message);
    };

    return(
    <View style={styles.container}>
        <StatusBar style='light' />

        <LottieView
          style={{
            width: 400,
            height: 400,
          }}
          source={require('../../Animations/81807-meditation-skull.json')}
          autoPlay={true}
        />


        <View style={styles.content}>
           
            <Text style={styles.title}>
                Push Notifications House
            </Text>


            <TextInput placeholder='Title...' placeholderTextColor={'#2F0044'} onChangeText={(title) => setTitle(title)} style={styles.inputs}/>

            <TextInput placeholder='Message...' placeholderTextColor={'#2F0044'} onChangeText={(body) => setMessage(body)} style={[styles.inputs, {height: 120}]}/>

            <ButtonSend title='Send Local Notification' loading={loading}  onPress={sendLocalNotification} />

            <ButtonSend title='Send Server Notification' loading={isLoading} onPress={SendServerlessNotification}  />

            <ModalView visible={visible} closeModal={() => setVisible(false)} animationType="fade">

              <LottieView style={{
                width: 400,
                height: 400,
                }}
                source={require('../../Animations/Boo.json')}
                autoPlay={true} />

                <Text style={styles.titleII}>
                  BOOO!
                </Text>

                <Text style={styles.titleII}>
                  Check Your Notification Bar.
                </Text>
            
            </ModalView>

        </View>
    </View>
    )
}
