import React from 'react';
import { TouchableOpacity, StatusBar, SafeAreaView, StyleSheet, Text, TextInput, Alert} from 'react-native';
import Cadastro from './src/telas/Cadastro';
import Cesta from './src/telas/Cesta';
import Login2 from './src/telas/Login2';

export default function App(){
  return(
    <SafeAreaView>
        <StatusBar />
        {/* <Cesta></Cesta>    */}
        {/* <Cadastro></Cadastro> */}
        <Login2/>
    </SafeAreaView>
  )}