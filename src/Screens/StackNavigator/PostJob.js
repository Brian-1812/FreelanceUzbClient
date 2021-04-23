import React, { useState } from 'react'
import {
  View, Text, Platform, StyleSheet, Dimensions,
  TextInput, TouchableOpacity, Modal
} from 'react-native'
import {
  RadioButton, useTheme
} from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Checkbox from '@react-native-community/checkbox'
import Icon from 'react-native-vector-icons/Ionicons'
import DateTimePicker from '@react-native-community/datetimepicker'
import Moment from 'moment'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputMask from 'react-native-text-input-mask'
import LocationModal from '../../Components/Modal/LocationModal'
import { expLevels } from '../../Constants/data'
import RoundedButton from '../../Components/Button/Rounded'

const { width } = Dimensions.get('window')

const PostJob = () => {
  const { colors } = useTheme()
  const insets = useSafeAreaInsets()
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState({formatted: '', extracted: ''})
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState('oneTime')
  const [salary, setSalary] = useState('')
  const [city, setCity] = useState('Toshkent')
  const [startDate, setStartDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)
  const [description, setDesription] = useState('')
  const [tags, setTags] = useState([])
  const [tag, setTag] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [experience, setExperience] = useState({
    zero: true,
    junior: false,
    middle: false,
    senior: false,
  })

  const closeModal = () => {
    setModalVisible(false)
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const changeNumber = (formatted, extracted) => {
    setPhoneNumber({formatted, extracted})
  }

  const changeDate = (event, selectedDate) => {
    setStartDate(selectedDate)
  }

  const showPicker = () => {
    setShowDate(true)
  }
  const hidePicker = () => {
    setShowDate(false)
  }

  const removeTag = singleTag => () => setTags(tags.filter((tag) => tag !== singleTag))

  const addTag = () => {
    setTag('')
    if(!tags.includes(tag) && tag.trim() !== ''){
      setTags([...tags, tag])
    }
  }

  const renderTags = () => {
    return tags.map((item, i) => (
      <TouchableOpacity
        key={item}
        style={styles.tagWrapper(colors.accent)}
        onPress={removeTag(item)}
      >
        <Text style={styles.tagText}>{item}</Text>
        <Icon name='close-outline' size={15} color='#fff'/>
      </TouchableOpacity>
    ))
  }

  const renderInput = (value, setValue, placeholder, multiline=false, numLines=1) => (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor={colors.accent}
      multiline={multiline}
      numberOfLines={numLines}
      minHeight={Platform.OS === 'ios' && multiline ? 100 : null}
      maxHeight={Platform.OS === 'ios' && multiline ? 150 : 100}
      textAlignVertical="top"
      style={[styles.textInput(colors)]}
    />
  )

  const renderCheckbox = (data, state, setState) => {
    return data.map(item => {
      const onChange = value => {
        setState({...state, [item.id]: value })
      }
      return (
      <View style={styles.checkContainer} key={item.id}>
        <Checkbox
          value={state[item.id]}
          onValueChange={onChange}
          tintColors={{ true: colors.secondary, false: colors.secondary }}
          boxType='circle'
          lineWidth={1}
          onCheckColor={colors.secondary}
          onTintColor={colors.secondary}
          onAnimationType='bounce'
          animationDuration={0.3}
          style={styles.checkbox}
        />
        <Text style={styles.checkTitle}>{item.label}</Text>
      </View>
    )})
  }

  const submit = () => {
    const seniority = Object.keys(experience).filter(item => experience[item] === true)
    let data = {
      userName: name, title, type, city, description,
    }
    if(Object.values(data).every(item => item.trim() !== '') && startDate &&
      seniority.length && tags.length > 0 &&
      Object.values(phoneNumber).every(item => item.trim() !== '')){
      console.log(seniority, data, email, startDate, tags, phoneNumber)
    }else{
      console.error("Please fill input fields!")
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper(insets.bottom)}
        extraScrollHeight={100}
      >
        <View style={styles.baseSection}>
        <Text style={styles.inputLabel(colors.primary)}>Ish nomi</Text>
        {renderInput(title, setTitle, "O'qituvchi...")}
        </View>
        <View style={styles.baseSection}>
        <Text style={styles.inputLabel(colors.primary)}>Ish turi (davomiyligi)</Text>
        <RadioButton.Group onValueChange={setType} value={type}>
          <RadioButton.Item color={colors.secondary} label='Bir martalik' value='oneTime'/>
          <RadioButton.Item color={colors.secondary} label='Doimiy' value='regular'/>
        </RadioButton.Group>
        </View>
        <View style={styles.baseSection}>
        <Text style={styles.inputLabel(colors.primary)}>Shahar</Text>
        <TouchableOpacity
          style={[styles.cityInput(colors.secondary)]}
          onPress={openModal}
        >
          <Text>{city}</Text>
          <Icon name='caret-down-outline' size={17} color={colors.accent}/>
        </TouchableOpacity>
        </View>
        <View style={styles.baseSection}>
        <Text style={styles.inputLabel(colors.primary)}>Tajriba</Text>
        <View style={styles.baseSection}>
        {renderCheckbox(expLevels, experience, setExperience)}
        </View>
        </View>
        <View style={styles.baseSection}>
        <View style={styles.tagsContainer}>
          <Text style={styles.inputLabel(colors.primary)}>Boshlanish sanasi:</Text>
          <TouchableOpacity
            style={styles.dateContainer}
            onPress={showPicker}
          >
            <Text style={styles.dateText}>{Moment(startDate).format('LL').toString()}</Text>
          </TouchableOpacity>

        </View>
        {showDate && 
        <>
          <DateTimePicker
            value={startDate}
            mode={'date'}
            display={'spinner'}
            onChange={changeDate}
          />
          <TouchableOpacity
            onPress={hidePicker}
            style={styles.dateButton}
          >
            <Text style={styles.dateText}>Tanlash</Text>
          </TouchableOpacity>
        </>
        }
        </View>
        <View style={styles.baseSection}>
          <Text style={styles.inputLabel(colors.primary)}>Qidiruvdagi so'zlar (#hashtag)</Text>
          <Text style={styles.helperText(colors.accent)}>
            Mijoz shu so'zlarni qidirganda sizning ish e'loningiz kelib chiqadi
          </Text>
          <View style={styles.tagInputWrapper}>
          <TextInput
            value={tag}
            onChangeText={setTag}
            placeholder="O'qituvchi, Dasturlash, C++, ..."
            placeholderTextColor={colors.accent}
            style={styles.tagInput(colors)}
            blurOnSubmit={false}
            onSubmitEditing={addTag}
          />
          </View>
          {tags.length>0 && <View style={styles.tagsContainer}>{renderTags()}</View>}
        </View>
        <View style={styles.baseSection}>
        <Text style={styles.inputLabel(colors.primary)}>Qo'shimcha ma'lumotlar</Text>
        {renderInput(description, setDesription, 'Sharoiti, talablari, yoshi, ...', true, 5)}
        </View>
        <View style={styles.line}/>
        <Text style={styles.inputLabel(colors.secondary)}>Ish beruvchi haqida</Text>
        <View style={styles.baseSection}>
        <Text style={styles.inputLabel(colors.primary)}>To'liq Ismingiz</Text>
        {renderInput(name, setName, 'Ism Familiya')}
        </View>
        <View style={styles.baseSection}>
        <Text style={styles.inputLabel(colors.primary)}>Email (Ixtiyoriy)</Text>
        {renderInput(email, setEmail, 'Email..')}
        </View>
        <View style={styles.baseSection}>
        <Text style={styles.inputLabel(colors.primary)}>Telefon raqam</Text>
        <TextInputMask
          onChangeText={changeNumber}
          keyboardType={'phone-pad'}
          mask={"+998 [00] [000] [00] [00]"}
          placeholder={'90 123 45 67'}
          placeholderTextColor={colors.accent}
          style={[styles.textInput(colors)]}
        />
        </View>
        <TouchableOpacity
          onPress={submit}
          style={styles.submitButton}
        >
          <RoundedButton 
            colors={[colors.primary, colors.secondary]}
            label={'E\'lon berish'}
            iconName={'megaphone'}
          />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <LocationModal 
          setModalVisible={setModalVisible}
          setCity={setCity}
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: padding => ({
    paddingHorizontal: 20,
    paddingBottom: padding,
  }),
  baseSection: {
    paddingVertical: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  textInput: colors => ({
    borderWidth: 0.5,
    borderColor: colors.secondary,
    borderRadius: 7,
    paddingVertical: 13,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.accent,
    marginVertical: 10,
  }),
  inputLabel: color => ({
    fontSize: 18,
    fontWeight: 'bold',
    color,
    marginVertical: 5,
  }),
  cityInput: color => ({
    flexDirection: 'row',
    borderColor: color,
    borderRadius: 7,
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 13,
  }),
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Platform.OS==='ios'? 3:0,
  },
  checkbox: {
    marginHorizontal: 10,
  },
  checkTitle: {
    fontSize: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginVertical: 13,
    flexWrap: 'wrap'
  },
  tagWrapper: color => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 5,
    backgroundColor: color,
    borderRadius: 5,
  }),
  tagInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tagText: {
    color: '#fff',
    marginRight: 10,
  }, 
  helperText: color => ({
    color,
    fontSize: 13,
  }),
  tagInput: colors => ({
    borderWidth: 0.5,
    borderColor: colors.secondary,
    borderRadius: 7,
    paddingVertical: 13,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.accent,
    marginVertical: 10,
    width: '100%'
  }),
  dateContainer: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    backgroundColor: '#dee0e3',
    borderRadius: 7,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    color: '#1d72e0',
    fontSize: 17,
  },
  dateButton: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dee0e3',
    borderRadius: 10,
  },
  line: {
    width: '100%',
    borderWidth: 0.4,
    marginVertical: 20,
    borderColor: '#9bb1ba'
  },
  submitButton: {
    width: width * 0.8,
    marginVertical: 20,
    alignSelf: 'center'
  }
})

export default PostJob
