import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import Login from './src/telas/Login';

export default function App(){
  return(
    <SafeAreaView>
        <StatusBar />
        <Login/>
    </SafeAreaView>
  )}