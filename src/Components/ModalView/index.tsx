
import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableOpacity,
  Text
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props){
  return(
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}>

        <View style={styles.overlay}>
          
    
                {children}
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>

           <Text style={styles.text}>
           I Already Checked!
            </Text>

          </TouchableOpacity>


        </View>

    </Modal>
  );
}