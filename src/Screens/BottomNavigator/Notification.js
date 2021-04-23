import React from 'react'
import {
  View, Text, StyleSheet, Dimensions, FlatList
} from 'react-native'
import { useSelector } from 'react-redux'
import { useTheme } from 'react-native-paper'
import NotificationItem from '../../Components/List/NotifcationItem'

const { width } = Dimensions.get('window')

const Notification = () => {
  const { colors } = useTheme()
  const { jobs, loading } = useSelector(state => ({
    loading: state.loader.mainLoader,
    jobs: state.jobs.jobs,
  }))

  const renderItem = ({item}) => {
    return (
      <NotificationItem item={item}/>
    )
  }
  const keyExtractor = item => item.id.toString()
  return (
    <View style={[styles.container(colors.background)]}>
      <FlatList
        data={jobs.slice(0, 20)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        style={styles.flatList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: color => ({
    flex: 1,
    backgroundColor: color
  }),
})

export default Notification
