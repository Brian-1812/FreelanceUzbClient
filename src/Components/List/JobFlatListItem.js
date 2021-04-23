import React, { memo, useState } from 'react'
import { 
  View, TouchableOpacity, Text, StyleSheet, Dimensions, Share, Platform
} from 'react-native'
import { useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Moment from 'moment'
import { Capitalize } from '../../Utils/StringUtils'
import { expLevelsMap, projectTypesMap } from '../../Constants/data'

const { width } = Dimensions.get('window')

const JobFlatListItem = ({item}) => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const [saved, setSaved] = useState(false)
  const [full, setSize] = useState(false)

  const renderTags = () => {
    if(item && item.tags) return item.tags.map((tag, index) => (
      <View key={index} style={styles.tagContainer(colors.accent)}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    ))
    return null
  }

  const onShare = async () => {
    try {
      await Share.share({
        message: (item && item.description) ? item.description.slice(0, 150): '',
        title: item.title
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const navigateToDetails = () => navigation.navigate('JobDetails', {item})

  const renderDescription = () => {
    if(item && item.description){
      return full ? item.description.trim():item.description.slice(0, 40).trim()+'...'
    }
    return ''
  }

  const renderExperience = () => {
    return item.experience.map(exp => expLevelsMap[exp]).join(', ')
  }

  return (
    <TouchableOpacity 
      style={styles.container('#fff')}
      onPress={navigateToDetails}
    >
      <View style={[styles.spaceBetween]}>
        <Text style={styles.title}>{Capitalize(item.title)}</Text>
      </View>
      <TouchableOpacity
        style={[styles.shareIcon, styles.iconContainer]}
        onPress={onShare}
      >
        <Icon name='share-social-outline' color={colors.accent} size={20}/>
      </TouchableOpacity>
      <Text style={styles.lastCreated}>
        {item && item.updatedAt ? Moment(item.updatedAt).format('LLL').toString():''}
      </Text>
      <View style={[styles.spaceBetween]}>
        <View style={styles.infoSection}>
          <Text style={styles.infoSectionTitle}>{item.paymentAmount + " so'm"}</Text>
          <Text style={styles.infoSectionHelper}>Budjet</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoSectionTitle}>{renderExperience()}</Text>
          <Text style={styles.infoSectionHelper}>Tajriba</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text
          style={styles.descriptionText}
        >
          {renderDescription()}
          {/* {full ? item.description.trim():item.description.slice(0, 40).trim()+'...'} */}
        </Text>
        <Text
          onPress={()=>setSize(state=>!state)}
          style={styles.more(colors.primary)}
        >
            {full? 'Qisqartirish':'Batafsil'}
        </Text>
      </View>
      <View style={[styles.row, styles.tagsContainer]}>
        {renderTags()}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: color => ({
    width: width,
    backgroundColor: color,
    borderRadius: 7,
    marginVertical: 3,
    borderBottomWidth: Platform.OS === 'ios'?0.2:0.1,
    borderColor: '#d1d1d1',
    paddingTop: 10,
    paddingBottom: 20,
  }),
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: "#000",
    fontSize: 19,
    width: width - 80,
    flexWrap: 'wrap',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  shareIcon: {
    position: 'absolute',
    right: 10,
    zIndex: 2,
    top: 10,
  },
  iconContainer: {
    borderWidth: 0.2,
    padding: 3,
    borderRadius: 20,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastCreated: {
    color: '#5e5e5e',
    fontSize: 12,
    marginLeft:10,
  },
  infoSection: {
    width: width/2 - 20,
    marginLeft: 10,
    marginTop: 20,
  },
  infoSectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  infoSectionHelper: {
    color: '#5e5e5e'
  },
  description: {
    marginTop: 15,
    marginLeft: 10,
    width: '100%'
  },
  descriptionText: {
    width: '95%',
    fontSize: 15,
  },
  more: color => ({
    color,
    fontWeight: 'bold',
    fontSize: 16,
    zIndex: 2,
  }),
  tagsContainer: {
    flexWrap: 'wrap',
    marginTop: 15,
    marginLeft: 10
  },
  tagContainer: color => ({
    backgroundColor: color,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 7,
    marginBottom: 3, 
  }),
  tagText: {
    color: '#fff'
  }
})

export default memo(JobFlatListItem)
