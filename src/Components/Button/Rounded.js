import React from 'react'
import { 
  Text, StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

const Rounded = ({ colors, iconName, label }) => {
  return (
      <LinearGradient
        colors={colors}
        start={{ x:0, y:0 }}
        end={{ x:1, y:0 }}
        style={styles.gradient}
      >
        <Text style={styles.label}>{label}</Text>
        <Icon name={iconName} size={25} style={styles.icon}/>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingHorizontal: 25,
    height: 55,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    color: '#fff',
  }
})
export default Rounded
