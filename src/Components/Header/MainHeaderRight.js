import React, { useState } from 'react'
import { 
  View, TouchableOpacity, StyleSheet, Dimensions, Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Portal, Modal } from 'react-native-paper'
import LocationModal from '../Modal/LocationModal'

const { width } = Dimensions.get('window')

const MainHeaderRight = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const setCity = val => console.log(val)
  const openModal = () => {
    setModalVisible(true)
  }
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={openModal}
      >
        <Text style={styles.location}>Farg'ona</Text>
        <Icon name="map-marker-alt" size={23} color="#fff"/>
      </TouchableOpacity>
      <Portal>
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
      </Portal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
  },
  location: {
    fontSize: 18,
    color: '#fff',
    marginRight: 15,
  }
})

export default MainHeaderRight
