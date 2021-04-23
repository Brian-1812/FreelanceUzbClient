import React, { useState, useRef, useEffect } from 'react'
import {
  View, Dimensions, StyleSheet, TextInput, TouchableOpacity
} from 'react-native'
import { useTheme, Portal } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { Modalize } from 'react-native-modalize'
import { useSelector, useDispatch } from 'react-redux'
import FilterModal from '../Modal/FilterModal'
import { fetchFilteredJobsRequest } from '../../Store/Actions/JobActions'
import { changeFilters } from '../../Store/Actions/FilterActions'

const { width, height } = Dimensions.get('window') 

const JobSearchHeader = () => {
  const [query, setQuery] = useState('')
  const { colors } = useTheme()
  const ModalRef = useRef(null)
  const dispatch = useDispatch()
  const { filters } = useSelector(state => ({
    filters: state.filters
  }))

  useEffect(()=>{
    setQuery(filters.query)
  }, [filters.query])

  const openModal = () => {
    ModalRef.current?.open()
  }
  const closeModal = () => {
    ModalRef.current?.close()
  }

  const search = () => {
    const { minSalary, maxSalary, city, workType, experience } = filters
    dispatch(fetchFilteredJobsRequest({ 
      limit: 12, page: 0, refreshing: true, query, workType: [], experience: [], city: ''
    }))
    dispatch(changeFilters({ 
      minSalary, maxSalary, city, workType, experience, query,
    }))
  }

  return (
    <View style={styles.container}>
      <View style={[styles.spaceAround]}>
      <View style={styles.searchBar}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        style={styles.input(colors.primary)}
        placeholder='Qidirish..'
        placeholderTextColor={colors.accent}
      />
      <TouchableOpacity
        style={styles.iconContainer(colors.primary)}
        onPress={search}
      >
        <Icon name='search-outline' size={23} color='#fff'/>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.filterContainer(colors.primary)}
        onPress={openModal}
      >
        <Icon name='options-outline' size={23} color='#fff'/>
      </TouchableOpacity>
      </View>
      <Portal>
      <Modalize
        ref={ModalRef}
        modalHeight={height * 0.8}
      >
        <FilterModal close={closeModal} query={query}/>
      </Modalize>
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    marginTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 15
  },
  searchBar: {
    width: '75%',
    flexDirection: 'row',
  },
  spaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: color => ({
    width: '85%',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: color,
    paddingHorizontal: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  }),
  iconContainer: color => ({
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    borderWidth: 2,
    borderColor: color,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  }),
  filterContainer: color => ({
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    borderWidth: 0.5,
    borderColor: color,
    borderRadius: 20,
  }),
})

export default JobSearchHeader
