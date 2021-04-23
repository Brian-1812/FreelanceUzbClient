import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PrimaryButton = ({ width, label, color }) => {
  return (
    <View 
      style={styles.container(color, width)}
    >
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: (color, width) => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    borderRadius: 10,
    paddingVertical: 12,
    width,
  }),
  label: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
export default PrimaryButton
