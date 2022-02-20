import React from 'react';
import { View, StyleSheet, TextInput, Button, Alert} from 'react-native';
// https://www.youtube.com/watch?v=RkbXAvj3jSc&t=45s
export default function Form1(){
    return(
        <View style={StyleSheet.container}>
            <TextInput
                placeholder="Jhon Walter"
                style={style.input}
            />
            <TextInput
                placeholder="(99) 9 9999-9999"
                style={style.input}
                keyboardType="numeric"
            />
            
            <Button 
                title="Entrar"
                style={style.btn}
                onPress={ () => Alert.alert('Usúario não Encontrado')}
            />
        </View>
    );
}

const style = StyleSheet.create({
    btn:{
        height: 100
    },
    container: {
        flex:1,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#DDD',
        borderRadius: 5,
        fontSize: 20,
        padding: 15,
        marginTop: 10,
        marginLeft: 20,
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    }
})