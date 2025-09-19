import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  // JSX = JavaScript XML
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/secure-icon.png')}
        style={styles.logo}
      />
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
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  }
});
