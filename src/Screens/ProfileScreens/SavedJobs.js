import React, { useEffect } from 'react'
import {
  View, StyleSheet, Dimensions, FlatList
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import AnimatedPlaceholder from 'react-native-animated-placeholder';
import { useTheme } from 'react-native-paper'
import { fetchSavedJobsRequest } from '../../Store/Actions/JobActions'
import JobFlatListItem from '../../Components/List/JobFlatListItem'

const { width } = Dimensions.get('window')

const SavedJobs = () => {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const { jobs, loading } = useSelector(state => ({
    loading: state.loader.mainLoader,
    jobs: state.jobs.savedJobs,
  }))
  
  useEffect(()=>{
    dispatch(fetchSavedJobsRequest())
  }, [])

  const renderItem = ({item}) => {
    return (
      <JobFlatListItem item={item}/>
    )
  }
  const keyExtractor = item => item.id.toString()

  return (
    <View style={[styles.container]}>
      {loading ?
      <View style={{width: width}}>
        <AnimatedPlaceholder
          itemStyle={styles.titlePlaceholder}
          duration={1000}
        />
        <AnimatedPlaceholder
          itemStyle={styles.bodyPlaceholder}
          duration={1000}
        />
        <AnimatedPlaceholder
          itemStyle={styles.tagsPlaceholder}
          duration={1000}
        />
      </View>:
      <FlatList
        data={jobs}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        style={styles.flatList}
      />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePlaceholder: {
    width: '95%',
    height: 30,
    backgroundColor: '#E0E0E0',
    marginVertical: 3,
    overflow: 'hidden',
  },
  bodyPlaceholder: {
    width: '95%',
    height: 30,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
    marginVertical: 3,
  },
  tagsPlaceholder: {
    width: '95%',
    height: 30,
    backgroundColor: '#E0E0E0',
    marginVertical: 3,
    overflow: 'hidden',
  },
  flatList: {
    backgroundColor: '#fff'
  },
})
export default SavedJobs
