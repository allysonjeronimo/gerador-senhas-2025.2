import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!*&-_$"

export default function App() {

  const [size, setSize] = useState(10)
  const [password, setPassword] = useState("")

  function generatePassword(){
    let value = ""
    for(let i = 0; i < size; i++){
        let randomIndex = Math.floor(Math.random() * charset.length)
        value += charset.charAt(randomIndex)
    }
    console.log("Senha: " + value)
    setPassword(value)
  }


  // JSX = JavaScript XML
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/secure-icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>
      <Text style={styles.textPassword}>Senha Gerada: {password}</Text>
      <View style={styles.sliderArea}>
         <Slider
          style={{height: 30}}
          minimumValue={6}
          maximumValue={20}
          thumbTintColor='#3f75fc'
          maximumTrackTintColor='#c7dceb'
          minimumTrackTintColor='#33aaff'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <Pressable style={({pressed}) => [
        styles.button,
        {opacity: (pressed) ? 0.7 : 1}
      ]}
        onPress={generatePassword}
      >
        <Text style={styles.buttonText} selectable={false}>Gerar Senha</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#badbfeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 120,
    height: 120,
    marginBottom: 16
  },
  sliderArea:{
    marginTop: 16,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    width: 200,
    backgroundColor: "#fff"  
  },
  title:{
    fontSize: 20,
    color: '#274c6aff',
    fontWeight: 'bold'
  },
  button:{
    width: 200,
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33aaff',
  },
  buttonText:{
    color: '#fff',
    fontSize: 20
  },
  textPassword:{
    fontSize: 20,
    color: '#274c6aff',
    fontWeight: 'bold'
  }
});
