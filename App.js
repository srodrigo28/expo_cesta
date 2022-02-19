import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App(){
  return(
    <SafeAreaView>
        <StatusBar />
        <Cesta></Cesta>
    </SafeAreaView>
  );
}
/***
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */