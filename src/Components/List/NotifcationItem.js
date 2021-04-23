import React, { memo } from 'react'
import {
  View, Text, Dimensions, StyleSheet, TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image'

const { width } = Dimensions.get('window')
const url = "https://firebasestorage.googleapis.com/v0/b/new-journey-24309.appspot.com/o/news%2F2021-03-20%2018.30.24.jpg?alt=media&token=6e88bd6b-fd65-4044-ae8d-6e7b0ca1727f"

const NotifcationItem = ({item}) => {
  const title = item.title.length > 50 ? item.title.slice(0,50)+'..':item.title 
  return (
    <TouchableOpacity style={styles.container}>
      <FastImage
        source={{uri:url}}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.helper}>3 minut oldin</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width - 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    flexDirection: 'row',
    height: 100,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 20,
    alignSelf: 'center'
  },
  content: {
    width: width - 100,
    marginLeft: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    width: '90%'
  },
  helper: {
    fontSize: 12,
    color: '#5e5e5e'
  }
})
export default memo(NotifcationItem)
