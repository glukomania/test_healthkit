import { StyleSheet, Text, View } from 'react-native';

type ValueProps = {
  label: string
  value: string
}

export const Value = ({label, value}: ValueProps) => (
  <View style={styles.valueContainer}>
  <Text style={styles.label}>{label}</Text>
  <Text style={styles.value}>{value}</Text>
</View>
)

const styles = StyleSheet.create({

  valueContainer: {
    minWidth: '40%',
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
