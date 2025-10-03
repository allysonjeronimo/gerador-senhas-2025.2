import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  // JSX = JavaScript XML
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/secure-icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>10 Caracteres</Text>
      <View style={styles.sliderArea}>
         <Slider
          style={{height: 30}}
          minimumValue={6}
          maximumValue={20}
          thumbTintColor='#3f75fc'
          maximumTrackTintColor='#c7dceb'
          minimumTrackTintColor='#33aaff'
        />
      </View>
      <Pressable style={({pressed}) => [
        styles.button,
        {opacity: (pressed) ? 0.7 : 1}
      ]}>
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
  }
});
