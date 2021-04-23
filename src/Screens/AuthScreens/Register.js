import React, { useState } from 'react'
import { 
  View, Text, StyleSheet, ImageBackground, TouchableOpacity,
  TextInput, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'react-native-paper'
import TextInputMask from 'react-native-text-input-mask'
import Icon from 'react-native-vector-icons/Ionicons'
import IconButton from '../../Components/Button/IconButton'

const image = require('../../Assets/png/loginBg.png')
const { width } = Dimensions.get('window')

const Register = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const { colors } = useTheme()
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
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

  const renderPasswordField = (label, placeholder, value, setValue) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{label}</Text>
        <View>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={!passwordVisible}
          placeholderTextColor={'#e1e3e6'}
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
    )
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
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={[StyleSheet.absoluteFillObject, styles.container(insets)]}
        >
          <Text style={[styles.title(width/2), styles.baseStyle]}>ACCOUNT YARATISH</Text>
          <View style={styles.baseStyle}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Ism</Text>
              <TextInput
                placeholder={'Ism Familiya'}
                value={name}
                onChangeText={setName}
                placeholderTextColor={'#e1e3e6'}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Telefon raqam</Text>
              <TextInputMask
                placeholder={'90 123 45 67'}
                mask={"+998 [00] [000] [00] [00]"}
                onChangeText={changePhone}
                placeholderTextColor={'#e1e3e6'}
                keyboardType={'phone-pad'}
                style={styles.input}
              />
            </View>
            {renderPasswordField('Parol', 'Parol', password, setPassword)}
            {renderPasswordField('Parol tasdiqlash', 'Parol tashdiqlash', passwordConfirm, setPasswordConfirm)}
          </View>
          <View style={[styles.actionContainer, styles.baseStyle]}>
            <Text style={styles.actionLabel}>Ro'yxatdan o'tish</Text>
            <TouchableOpacity
              style={styles.loginButton(colors.accent)}
            >
              <IconButton iconColor='#fff' iconName='arrow-forward-outline'/>
            </TouchableOpacity>
          </View>
          <View style={[styles.linkContainer, styles.baseStyle]}>
            <TouchableOpacity onPress={navigate('Login')}>
              <Text style={styles.link}>Kirish</Text>
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
    left: 6,
    width: 45,
    height: 45,
    zIndex: 2,
    backgroundColor: 'transparent',
  }),
  baseStyle:{
    marginLeft: 45,
    marginRight: 35
  },
  title: width => ({
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    width,
  }),
  inputContainer: {
    marginVertical: 20,
  },
  inputText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    borderBottomWidth: 0.3,
    borderColor: '#fff',
    width: '100%'
  },
  actionContainer: {
    justifyContent: 'center'
  },
  actionLabel: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    width: '60%'
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
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 10,
  }
})
export default Register
