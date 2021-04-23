import React, { useState } from 'react'
import { 
  View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput,
  TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'react-native-paper'
import TextInputMask from 'react-native-text-input-mask'
import Icon from 'react-native-vector-icons/Ionicons'
import IconButton from '../../Components/Button/IconButton'

const image = require('../../Assets/png/loginBg.png')

const Login = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const { colors } = useTheme()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const goBack = () => {
    navigation.goBack()
  }

  const navigate = route => () => {
    navigation.navigate(route)
  }

  const changePhone = (formatted, extracted) => {
    setPhoneNumber(extracted)
  }

  const switchEyeIcon = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <ImageBackground
      source={image}
      style={[StyleSheet.absoluteFillObject]}
    >
      <TouchableOpacity
        style={styles.backButton(insets)}
        onPress={goBack}
      >
        <IconButton iconColor='#fff' iconName='chevron-back-outline'/>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={[StyleSheet.absoluteFillObject, styles.container(insets)]}
        >
          <Text style={[styles.title, styles.baseStyle]}>KIRISH</Text>
          <View style={styles.baseStyle}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Telefon raqam"}</Text>
              <TextInputMask
                placeholder={'90 123 45 67'}
                mask={"+998 [00] [000] [00] [00]"}
                onChangeText={changePhone}
                placeholderTextColor={'#e1e3e6'}
                keyboardType={'phone-pad'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>{"Parol"}</Text>
              <View>
                <TextInput
                  placeholder={'Parol'}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!passwordVisible}
                  placeholderTextColor='#2f4280'
                  style={styles.input}
                />
                <TouchableOpacity
                  onPress={switchEyeIcon}
                  style={styles.eyeIcon}
                >
                  <Icon
                    name={passwordVisible?'eye':'eye-off'}
                    color={colors.accent}
                    size={27}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.actionContainer, styles.baseStyle]}>
            <Text style={styles.actionLabel}>Kirish</Text>
            <TouchableOpacity
              style={styles.loginButton(colors.accent)}
            >
              <IconButton iconColor='#fff' iconName='arrow-forward-outline'/>
            </TouchableOpacity>
          </View>
          <View style={[styles.linkContainer, styles.baseStyle]}>
            <TouchableOpacity onPress={navigate('Register')}>
              <Text style={styles.link}>Ro'yxatdan o'tish</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Parolni unutdingizmi?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: insets => ({
    paddingTop: insets.top+5,
    paddingBottom: insets.bottom+10,
    paddingHorizontal: 5,
    justifyContent: 'space-evenly'
  }),
  backButton: insets => ({
    position: 'absolute',
    top: insets.top + 5,
    zIndex: 2,
    left: 5,
    width: 45,
    height: 45,
    backgroundColor: 'transparent',
  }),
  baseStyle:{
    marginRight: 30,
    marginLeft: 45,
  },
  title: {
    fontSize: 29,
    color: '#fff',
    fontWeight: 'bold'
  },
  inputContainer: {
    marginVertical: 20,
  },
  inputText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    borderBottomWidth: 0.3,
    borderColor: '#fff'
  },
  actionContainer: {
    justifyContent: 'center'
  },
  actionLabel: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  loginButton: color => ({
    position: 'absolute',
    right: 0,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: color,
    shadowColor: '#fff',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.6,
    elevation: 10,
  }),
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {
    color: '#1f3270',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 10,
  }
})
export default Login
