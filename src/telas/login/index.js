import React from 'react';
import { Dimensions, KeyboardAvoidingView,StyleSheet, Image, View } from 'react-native';
import user1 from './../../assets/user1.jpeg';
import user2 from './../../assets/user2.jpeg';

const width = Dimensions.get('screen').width;

export default function Login(){
    return(
        <KeyboardAvoidingView>
            <View style={css.container}>
                <View style={css.topo1}></View>
                <Image style={css.img1} source={user2}/>
            </View>
        </KeyboardAvoidingView>
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

    }
})