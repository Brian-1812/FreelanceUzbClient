import React from 'react'
import {
  View, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native'
import LottieView from 'lottie-react-native'
import { useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Rounded from '../../Components/Button/Rounded'

const { width } = Dimensions.get('window')
const JOB_ANIM = require('../../Assets/json/JobPost_1.json')

const PostJob = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const navigate = value => () => {
    navigation.navigate(value)
  }
  return (
    <View style={[styles.container]}>
      <LottieView source={JOB_ANIM} autoPlay loop style={styles.animation} />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={navigate('ShareJob')}
        >
          <Rounded iconName="megaphone" label="Ish e'loni berish" colors={[colors.secondary, colors.primary]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={navigate('SearchCandidate')}
        >
          <Rounded iconName="search" label="Ishchi izlash" colors={[colors.secondary, colors.primary]} />
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
  animation: {
    width: width * 0.7
  },
  button: {
    marginVertical: 5,
    width: width * 0.8,
  }
})

export default PostJob
