import React from 'react';
import {StyleSheet, TouchableOpacity, Text, TextInput, View} from 'react-native';

export default function Cadastro(){
    return(
        <View style={style.container}>
            <TextInput
                placeholder="Nome "
                style={style.input}
            />
            <TextInput
                placeholder={'CPF'}
                keyboardType="numeric"
                style={style.input}
            />
            <TextInput
                placeholder={'00 0 0000-0000'}
                keyboardType="numeric"
                style={style.input}
            />
            <TextInput
                placeholder={'00 0 0000-0000'}
                keyboardType="Telefone"
                style={style.input}
            />
            <TouchableOpacity onPress={() => Alert.alert('oi')} style={style.btn}>
                <Text style={style.btnText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </View>
)};
const style = StyleSheet.create({
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
      padding: 15,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
      fontSize: 20,
      fontWeight: 'bold'
    },
    btn:{
        height: 50,
        width: '90%',
        marginLeft: 20,
        borderRadius: 5,
        backgroundColor: '#4b3fd2'
    },
    btnText:{
      backgroundColor: 'white',
      fontSize: 20,
      width: '90%',
      borderRadius: 10,
      marginLeft: 20,
      paddingHorizontal: '32%',
      paddingVertical: '4%',
      height: 50,
      fontWeight: 'bold',
      backgroundColor: '#4b3fd2'
    },
  });