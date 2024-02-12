import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Value} from './src/components/Value'
import RingProgress from './src/components/RingProgress'


export default function App() {
  return (
    <View style={styles.container}>

      <RingProgress progress = {0.2}/>

      <View style={styles.values}>
        <Value label='Steps' value='1234' />

        <Value label='Distance' value='12km' />

        <Value label='Flights climbed' value='12' />
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row', 
    gap: 25,
    flexWrap: 'wrap'
  },

});
