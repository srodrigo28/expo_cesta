import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import Texto from '../componentes/Texto';
import topo from './../../assets/topo.png';
import logo from './../../assets/logo.png';


const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
                <Image source={topo} style={estilos.topo} />
                <Text style={estilos.titulo}>Detalhes da cesta</Text>

                <View style={estilos.cesta__container}>
                <Text style={estilos.fazenda__cesta}>Cesta de Verduras</Text>
                    <View style={estilos.fazenda__box}>
                        <Image style={estilos.fazenda__imagem} source={logo} />
                        <Text style={estilos.nome__fazenda}>Jenny Jack Farm</Text>
                    </View>
                    <Texto style={estilos.nome__descricao}>
                          Uma cesta com produtos selecionados
                          cuidadosamente da fazenda direto para
                          sua cozinha
                    </Texto>
                    <Text style={estilos.preco}>R$ 100,00</Text>
                </View>
            </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        fontWeight: "bold",
        marginTop: 160,
        marginLeft: 20,
        fontSize: 23,
        color: "#8cd448"
    },
    cesta__container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    fazenda__box: {
        flexDirection: "row",
        marginBottom: 15
    },
    fazenda__imagem:{
        width: 50,
        height: 50,
        marginRight: 10
    },
    nome__fazenda: {
        fontSize: 22,
        lineHeight: 26,
        fontWeight: "bold",
        color: "#8cd448",
        marginTop: 8
    },
    fazenda__cesta: {
        color: "#8cd448",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",

    },
    nome__descricao: {
        color: "#A3A3A3",
        fontSize: 18,
        lineHeight: 26,
        textAlign: "justify",
        paddingVertical: 8,
        paddingHorizontal: 20
    },
    preco: {
        color: "#8cd448",
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "right",
        marginRight: 20

    }
});
//export default Cesta;