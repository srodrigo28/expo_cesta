import React from 'react';
import { TouchableOpacity, StatusBar, SafeAreaView, StyleSheet, Text, TextInput, Alert} from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App(){
  return(
    <SafeAreaView>
        <StatusBar />
        <Cesta></Cesta>

        <TextInput
          placeholder="Entra R$ "
          style={style.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder={'Troco R$'}
          style={style.input}
        />
        <TouchableOpacity onPress={() => Alert.alert('oi')} style={style.btn}>
          <Text style={style.btnText}>
              Calcular
          </Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
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
    backgroundColor: 'red'
  },
  btn:{
      height: 50,
      width: '90%',
      marginLeft: 20,
      borderRadius: 5,
      backgroundColor: 'red'
  },
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
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold'
  }
})