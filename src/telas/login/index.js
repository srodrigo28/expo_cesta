import React from 'react';
import { Dimensions, KeyboardAvoidingView,
         StyleSheet, Image, View, TextInput, Text, TouchableOpacity 
} from 'react-native';
import user2 from './../../assets/user2.jpeg';

const width = Dimensions.get('screen').width;

export default function Login(){
    return(
        <View>
            <View style={css.container}>
                <View style={css.topo1}></View>
                <Text>Cadastro Funcionários</Text>
                <Image style={css.img1} source={user2}/>
            </View>
            <TextInput
                placeholder="Nome "
                style={css.input}
            />
            <TextInput
                placeholder={'CPF'}
                keyboardType="numeric"
                style={css.input}
            />
            <TextInput
                placeholder={'00 0 0000-0000'}
                keyboardType="numeric"
                style={css.input}
            />
            <TextInput
                placeholder={'00 0 0000-0000'}
                keyboardType="Telefone"
                style={css.input}
            />
            <TouchableOpacity 
                onPress={() => Alert.alert('oi')} style={css.btn}>
                <Text style={css.btnText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
    },
    topo1: {
        width: "100%",
        height: 50,
        backgroundColor: "red",
        marginBottom: 50
    },
    img1: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 50
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
})