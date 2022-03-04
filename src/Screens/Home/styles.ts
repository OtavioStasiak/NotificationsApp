import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#EA6F00'
    },
    content: {
        width: '100%',
        backgroundColor: '#2F0044',
        height: '100%',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#fff',
        paddingTop: 7
    },
    title: {
        color: "#fff",
        paddingTop: 15,
        fontSize: 25,
        fontWeight: 'bold'
    },
    inputs: {
        width: '90%',
        paddingLeft: 14,
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#EA6F00',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        textAlignVertical: 'top',
        paddingTop: 12
    },
    titleII: {
        color: "#FFF",
        paddingTop: 0,
        fontSize: 30,
        fontWeight: 'bold',
        elevation: 29
    }

})