import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import LottieView from 'lottie-react-native';

import { styles } from "./styles";


type Props = TouchableOpacityProps & {
    title: string;
    loading: boolean;
}

export function ButtonSend({title, loading, ...rest}: Props){

    return(
        <TouchableOpacity style={styles.container} {...rest}>
        { loading === true 
        ?
            <LottieView
            style={{
                width: 60,
                height: 60,
                marginBottom: 15
            }}
             source={require('../../Animations/97746-loading-deuna.json')}
             autoPlay={true}
            />
        :
            <Text style={styles.title}>
            {title}
            </Text>}

        </TouchableOpacity>
    )
}