import React from 'react';
import { Dimensions, Alert,StyleSheet, Image, View,
         TextInput, Text, TouchableOpacity 
} from 'react-native';
import lp_logo from './../../assets/lp_logo.jpeg';
import lp_login from './../../assets/lp_login.jpeg';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const width = Dimensions.get('screen').width;

export default function Login2(){
    return(
        <View>
            <View style={css.container}>
                <View style={css.topo1}>
                    <Text style={css.texto_top}>Login</Text>
                </View>
                <Image style={css.img1} source={lp_login}/>
            </View>
            <Text style={css.texto_label}>Usuário</Text>
            <TextInput
                placeholder="Usúario "
                style={css.input}
                placeholderTextColor="#918f8a"
            />
            <Text style={css.texto_label}>Senha</Text>
            <TextInput
                placeholder={'********'}
                style={css.input}
                placeholderTextColor="#918f8a"
            />
            <TouchableOpacity 
                onPress={() => Alert.alert('Usuário ou senha sem permisão')} style={css.btn}>
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
    texto_top: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
    },
    texto_label: {
        marginLeft: 25,
        marginBottom: -7,
        color: '#918f8a'
    },
    topo1: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 52,
        backgroundColor: "#BD3804",
        marginBottom: 50
    },
    img1: {
        width: 200,
        height: 200,
        marginBottom: 50
    },
    img_circular: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 50
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#ececeb',
        borderRadius: 20,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 140
      },
      btn:{
          height: 50,
          width: '90%',
          marginLeft: 20,
          borderRadius: 20,
          backgroundColor: '#BD3804',
          marginTop: '40%',
      },
      btnText:{
        color: 'white',
        fontSize: 20,
        width: '90%',
        marginLeft: 20,
        paddingHorizontal: '32%',
        paddingVertical: '4%',
        height: 50,
        fontWeight: 'bold',
      },
})