import React, { useState } from 'react'
import {
  View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity,
  TextInput,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useTheme } from 'react-native-paper'
import Icon from '../../Assets/svg/index'

const { width } = Dimensions.get('window')
const url = 'https://firebasestorage.googleapis.com/v0/b/new-journey-24309.appspot.com/o/userImages%2F1191.jpg?alt=media&token=2bf148dd-21b1-4b65-b1dd-88ac391e401b'

const PersonalData = () => {
  const { colors } = useTheme()
  const [personalData, setPersonalData] = useState({
    fullName: '',
    birthday: new Date(),
    phoneNumber: '',
    gender: '',
  })
  
  const changeData = key => value => {
    setPersonalData(state => ({...state, [key]: value}))
  }
  return (
    <ScrollView
     contentContainerStyle={styles.container}
     showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.imageContainer}>
        <FastImage
          source={{uri:url}}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.image}
        />
        <Icon.Camera width={40} height={40} style={styles.cameraIcon}/>
      </TouchableOpacity>
      <Text style={styles.label}>To'liq ismingiz</Text>
      <TextInput
        style={styles.textInput(colors)}
        value={personalData.fullName}
        onChangeText={changeData('fullName')}
      />
      <Text style={styles.label}>Tug'ilgan kuningiz</Text>
      <TextInput
        style={styles.textInput(colors)}
        value={personalData.fullName}
        onChangeText={changeData('birthday')}
      />
      <Text style={styles.label}>Telefon raqamingiz</Text>
      <TextInput
        style={styles.textInput(colors)}
        value={personalData.fullName}
        onChangeText={changeData('phoneNumber')}
      />
      <TouchableOpacity
        style={styles.submitButton(colors.primary)}
      >
        <Text style={styles.submitText}>Yangilash</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  cameraIcon: {
    marginLeft: 80,
    marginTop: -30,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 15,
  },
  textInput: colors => ({
    width: width - 40,
    height: 55,
    // backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 8,
    borderColor: colors.accent,
    borderWidth: 0.3,
    color: colors.primary
  }),
  submitButton: color => ({
    width: width - 60,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 15,
  }),
  submitText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }
})
export default PersonalData
