import React, { useEffect, useState } from 'react'
import {
  View, StyleSheet, Dimensions, FlatList, Text
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import AnimatedPlaceholder from 'react-native-animated-placeholder';
import { useTheme } from 'react-native-paper'
import { fetchListedJobsRequest, fetchFilteredJobsRequest } from '../../Store/Actions/JobActions'
import JobFlatListItem from '../../Components/List/JobFlatListItem'
import SearchHeader from '../../Components/Header/JobSearchHeader'

const { width } = Dimensions.get('window')

const Home = () => {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const { jobs, loading, filters } = useSelector(state => ({
    loading: state.loader.mainLoader,
    jobs: state.jobs.jobs,
    filters: state.filters,
  }))
  
  useEffect(()=>{
    refresh()
  }, [])

  const refresh = () => {
    fetchData(true, 0)
    setPage(1)
  }
 
  const loadMore = () => {
    fetchData(false, page)
    setPage(state => state+1)
  }

  const fetchData = (refreshing, offset) => {
    if(filters.filterOn){
      const { minSalary, maxSalary, city, workType, experience, query } = filters
      dispatch(fetchFilteredJobsRequest({ 
        minSalary, maxSalary, city, workType,
        experience, limit: 12, page: offset, refreshing, query,
      }))
    }else{
      dispatch(fetchListedJobsRequest({ limit: 12, page: offset, refreshing }))
    }
  }

  const emptyComponent = () => (
    <View style={styles.container}>
      <Text>No data</Text>
    </View>
  )

  const renderItem = ({item}) => {
    return (
      <JobFlatListItem item={item}/>
    )
  }
  const keyExtractor = item => item.id.toString()

  const header = () => (
    <SearchHeader fetchData={fetchData}/>
  )

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
        ListEmptyComponent={emptyComponent}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        style={styles.flatList}
        ListHeaderComponent={header}
        onRefresh={refresh}
        refreshing={loading}
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
export default Home
