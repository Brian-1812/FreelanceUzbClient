import React from 'react'
import {
  View, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native'
import { useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import CustomButton from '../../Components/Button/Rounded'

const { width } = Dimensions.get('window')
const ANIM2 = require('../../Assets/json/2.json')

const Router = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const navigate = routeName => () => {
    navigation.navigate(routeName)
  }
  return (
    <View style={styles.container}>
      <LottieView source={ANIM2} style={styles.animation} loop autoPlay />
      <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.button(width)}
        onPress={navigate('Login')}
      >
        <CustomButton 
          width={width*0.6}
          label='Kirish'
          iconName='log-in-outline'
          colors={[colors.secondary, colors.primary]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button(width)}
        onPress={navigate('Register')}
      >
      <CustomButton 
        width={width*0.6}
        label="Ro'yxatdan o'tish"
        iconName='person-add-outline'
        colors={[colors.secondary, colors.primary]}
      />
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttons: {
    alignItems: 'center',
  },
  button: width => ({
    width: width*0.8,
    marginTop: 10,
    shadowColor: '#f0ab2b',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.6,
    elevation: 10,
  }),
  animation: {
    width: width*0.6
  }
})

export default Router
