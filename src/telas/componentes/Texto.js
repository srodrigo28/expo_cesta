import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }){
    let estilo = estilos.texto_2;

    if(style?.fontWeight === 'bold'){
        estilo = estilo.texto_1;
    }
    
    return <Text style={[style, estilo]}> { children } </Text>
}

const estilos = StyleSheet.create({
    texto_1:{
        fontWeight: "bold",
        fontSize: 20,
    },
    texto_2:{
        fontSize: 15,
    }
});