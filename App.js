import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Form1 from './src/telas/Form1';
import Login from './src/telas/Login';

export default function App(){
  return(
    <SafeAreaView>
        <StatusBar />
        <Login></Login>
        <Form1></Form1>
    </SafeAreaView>
  );
}