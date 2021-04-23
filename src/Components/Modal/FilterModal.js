import React, { useState, useEffect } from 'react'
import {
  View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform, TextInput, Modal
} from 'react-native'
import { useTheme } from 'react-native-paper'
import Checkbox from '@react-native-community/checkbox'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryButton from '../Button/PrimaryButton'
import LocationModal from './LocationModal'
import { expLevels, projectTypes } from '../../Constants/data'
import { fetchFilteredJobsRequest } from '../../Store/Actions/JobActions'
import { changeFilters } from '../../Store/Actions/FilterActions'

const { width } = Dimensions.get('window')

const FilterModal = ({ close, query }) => {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const {
    cityFilter, min, max, typeFilter, expFilter,
  } = useSelector(state => ({
    min: state.filters.minSalary,
    max: state.filters.maxSalary,
    cityFilter: state.filters.city,
    typeFilter: state.filters.workType,
    expFilter: state.filters.experience,
  }))
  const [minSalary, setMinSalary] = useState('')
  const [maxSalary, setMaxSalary] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [city, setCity] = useState('')
  const [workType, setWorkType] = useState({
    oneTime: false,
    regular: false
  })

  const [checkState, setCheckState] = useState({
    zero: false,
    junior: false,
    middle: false,
    senior: false,
  })
  // Showing previous filters
  useEffect(() => {
    setMinSalary(min?min.toString():'')
    setMaxSalary(max?max.toString():'')
    setCity(cityFilter)
    setWorkType({
      oneTime: typeFilter.includes('oneTime'),
      regular: typeFilter.includes('regular'),
    })
    setCheckState({
      zero: expFilter.includes('zero'),
      junior: expFilter.includes('junior'),
      middle: expFilter.includes('middle'),
      senior: expFilter.includes('senior'),
    })
  }, [min, max, cityFilter, typeFilter, expFilter])


  const applyFilters = () => {
    let jobType = projectTypes.filter(item => workType[item.id] === true).map(item => item.id)
    let experience = expLevels.filter(item => checkState[item.id] === true).map(item => item.id)
    dispatch(changeFilters({ 
      minSalary: parseInt(minSalary, 10), maxSalary: parseInt(maxSalary, 10), 
      city, workType: jobType, experience, query,
    }))
    dispatch(fetchFilteredJobsRequest({ 
      minSalary: parseInt(minSalary, 10), maxSalary: parseInt(maxSalary, 10), city, 
      workType: jobType, experience, limit: 12, page: 0, refreshing: true, query,
    }))
    close()
  }

  const renderCheckbox = (data, state, setState) => {
    return data.map((item, i) => (
      <View style={styles.checkContainer} key={item.id}>
        <Checkbox
          value={state[item.id]}
          onValueChange={value => setState({...state, [item.id]: value })}
          tintColors={{ true: colors.primary, false: colors.primary }}
          boxType='circle'
          lineWidth={1}
          onCheckColor={colors.primary}
          onTintColor={colors.primary}
          onAnimationType='bounce'
          animationDuration={0.3}
          style={styles.checkbox}
        />
        <Text style={styles.checkTitle}>{item.label}</Text>
      </View>
    ))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle(colors.primary)}>Filter</Text>
      <Text style={styles.title}>Tajriba:</Text>
      <View style={styles.section}>
        {renderCheckbox(expLevels, checkState, setCheckState)}
      </View>
      <Text style={styles.title}>Ish haqi:</Text>
      <View style={[styles.rowDirection, styles.section]}>
        <TextInput
          value={minSalary}
          onChangeText={setMinSalary}
          placeholder='Min'
          keyboardType='numeric'
          style={styles.salaryInput(colors.primary)}
        />
        <Text>-</Text>
        <TextInput
          value={maxSalary}
          onChangeText={setMaxSalary}
          placeholder='Max'
          keyboardType='numeric'
          style={styles.salaryInput(colors.primary)}
        />
        <View><Text>SO'M</Text></View>
      </View>
      <Text style={styles.title}>Shahar:</Text>
      <TouchableOpacity
        style={[styles.section, styles.cityInput(colors.primary)]}
        onPress={() => setModalVisible(true)}
      >
        <Text>{city}</Text>
        <Icon name='caret-down-outline' size={17} color={colors.accent}/>
      </TouchableOpacity>
      <Text style={styles.title}>Ish turi:</Text>
      <View style={styles.section}>
        {renderCheckbox(projectTypes, workType, setWorkType)}
      </View>
      <View style={[styles.rowDirection, styles.spaceBetween]}>
        <PrimaryButton 
          color={colors.primary}
          label='Izlash'
          width={width*0.6}
          onPress={applyFilters}
        />
        <PrimaryButton 
          color='#b55528'
          label="Bekor qilish"
          width={width*0.3}
          onPress={close}
        />
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
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
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  mainTitle: color => ({
    fontSize: 20,
    fontWeight: 'bold',
    color: color,
    alignSelf: 'center',
  }),
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 13,
  },
  section: {
    marginBottom: 15,
  },
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
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  salaryInput: color => ({
    width: width/3,
    borderWidth: 1,
    borderColor: color,
    borderRadius: 7,
    justifyContent: 'center',
    paddingVertical: Platform.OS==='ios'? 12:10,
    paddingLeft: 10,
    marginHorizontal: 10,
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
  })
})
export default FilterModal
