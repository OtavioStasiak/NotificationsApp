import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.95)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    content: {
        backgroundColor: '#fff',
        borderColor: '#FB8500',
        borderWidth: 4,
        borderRadius: 3,
        width: '95%',
        height: '70%',
    },
    closeButton: {
        width: '80%',
        backgroundColor: '#EA6F00',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 50,
        marginTop: 20

    },
    text: {
        color: '#2F0044',
        fontWeight: 'bold',
        fontSize: 17,
        
    }

})