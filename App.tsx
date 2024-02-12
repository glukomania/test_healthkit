import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type ValueProps = {
  label: string
  value: string
}

const Value = ({label, value}: ValueProps) => (
  <View style={styles.valueContainer}>
  <Text style={styles.label}>{label}</Text>
  <Text style={styles.value}>{value}</Text>
</View>
)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>

      <View style={{flexDirection: 'row'}}>
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
  valueContainer: {
    marginRight: 50
  }, 
  label: {
    color: 'white'
  },
  value: {
    fontSize: 35,
    color: '#AFB3BE',
    fontWeight: '500'
  }


});
