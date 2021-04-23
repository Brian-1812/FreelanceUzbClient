import React from 'react'
import {
  View, TouchableOpacity, Text, Dimensions, Platform, StyleSheet
} from 'react-native'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

const ModalHeader = ({setModalVisible}) => {
  const { colors } = useTheme()
  return (
    <View style={styles.container(colors.primary)}>
      <TouchableOpacity
        onPress={()=>setModalVisible(false)}
      >
        <Icon name='close-outline' size={30} style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.title}>Shaharni tanlang</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: color => ({
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color,
  }),
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  icon: {
    color: '#fff',
    marginHorizontal: 10,
  }
})
export default ModalHeader
