import React, { useState } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, TextInput, FlatList
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import ModalHeader from '../Header/ModalHeader'
import { locations } from '../../Constants/data'

const LocationModal = ({setModalVisible, setCity}) => {
  const { colors } = useTheme()
  const [data, setData] = useState(locations)
  const [query, setQuery] = useState('')

  const onSearch = (text) => {
    setQuery(text)
    setData(locations.filter(location => location.name.includes(text.trim())))
  }
  const keyExtractor = item => item.id.toString()
  
  
  const renderItem = ({item}) => {
    const onPress = () => {
      setCity(item.name)
      setModalVisible(false)
    }
    return (
      <TouchableOpacity 
        style={styles.itemContainer}
        onPress={onPress}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView
      style={styles.container(colors.primary)}
      edges={['top']}
    >
      <View style={styles.container('#fff')}>
        <ModalHeader setModalVisible={setModalVisible}/>
        <View style={styles.searchBar(colors.primary)}>
          <View style={styles.iconContainer(colors.primary)}>
            <Icon name='search-outline' size={23} color='#fff'/>
          </View>
          <TextInput
            value={query}
            onChangeText={onSearch}
            style={styles.input}
            placeholder='Qidirish..'
            placeholderTextColor={colors.accent}
          />
        </View>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: color => ({
    flex: 1,
    backgroundColor: color
  }),
  searchBar: color => ({
    flexDirection: 'row',
    marginVertical: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: color,
    borderRadius: 4,
    height: 40,
  }),
  input: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  iconContainer: color => ({
    width: 42,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  }),
  itemContainer: {
    marginVertical: 8,
    marginHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
  }
})
export default LocationModal
