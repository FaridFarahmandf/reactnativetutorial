import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
    container: {
        padding:24,
        flex:1,
    },
    titleText: {
        fontFamily:"nunito-bold",
        marginVertical:10,
        fontSize:18,
        color:"blue"
    },
    paragraph: {
        lineHeight: 20,
        marginVertical: 8,
    }
})