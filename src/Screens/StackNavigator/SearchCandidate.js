import React from 'react'
import {
  View, Text, Dimensions, StyleSheet,
} from 'react-native'
import LottieView from 'lottie-react-native'

const { width } = Dimensions.get('window')
const COMING_SOON = require('../../Assets/json/coming_soon.json')

const SearchCandidate = () => {
  return (
    <View style={styles.container}>
      <LottieView source={COMING_SOON} autoPlay loop style={styles.animation} />
      <Text>Tex orada</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  animation: {
    width: width*0.7,
  }
})

export default SearchCandidate
