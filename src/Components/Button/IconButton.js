import React from 'react'
import { 
  View, StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const IconButton = ({ iconColor, iconName }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Icon name={iconName} color={iconColor} size={25}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default IconButton
