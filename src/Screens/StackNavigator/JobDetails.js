import React, { useState } from 'react'
import { 
  View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import Moment from 'moment'
import FastImage from 'react-native-fast-image'
import IconAlt from '../../Assets/svg/index'
import PrimaryButton from '../../Components/Button/PrimaryButton'
import { Capitalize } from '../../Utils/StringUtils'
import { expLevelsMap, projectTypesMap } from '../../Constants/data'

const { width } = Dimensions.get('window')
const url = 'https://firebasestorage.googleapis.com/v0/b/new-journey-24309.appspot.com/o/userImages%2F1191.jpg?alt=media&token=2bf148dd-21b1-4b65-b1dd-88ac391e401b'

const JobDetails = () => {
  const { item } = useRoute().params
  const { colors } = useTheme()
  const [saved, setSaved] = useState(false)

  const renderSkills = () => {
    if(item && item.tags) return item.tags.map((tag, i) => (
      <View key={i} style={styles.skillContainer(colors.accent)}>
        <Text style={styles.skillName}>{tag}</Text>
      </View>
    ))
    return null
  }

  const renderExperience = () => {
    return item.experience.map(exp => expLevelsMap[exp]).join(', ')
  }
  return (
    <View style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.scrollView}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.locationName}>
        {item && item.updatedAt ? Moment(item.updatedAt).format('LLL').toString(): ''}
      </Text>
      <View style={styles.locationBox}>
        <IconAlt.Location width={24} height={24} style={styles.locationIcon}/>
        <Text style={styles.locationName}>{item.city}</Text>
      </View>
      <View style={styles.line}/>
      <Text style={styles.contentText}>
        {item.description}
      </Text>
      <View style={styles.extraDetailsBox}>
        <View style={styles.extraDetail}>
          <Text style={styles.extraTitle}>{item.paymentAmount + " so'm"}</Text>
          <Text style={styles.extraHelper}>Budjet</Text>
        </View>
        <View style={styles.extraDetail}>
          <Text style={styles.extraTitle}>{renderExperience()}</Text>
          <Text style={styles.extraHelper}>Tajriba</Text>
        </View>
        <View style={[styles.extraDetail, styles.margin(20, 0)]}>
          <Text style={[styles.extraTitle]}>{projectTypesMap[item.projectType]}</Text>
          <Text style={styles.extraHelper}>Ish turi</Text>
        </View>
        <View style={[styles.extraDetail, styles.margin(20, 0)]}>
          <Text style={[styles.extraTitle]}>
            {item.startDate ? Moment(item.startDate).format('LLL').toString(): 'Noaniq'}
          </Text>
          <Text style={styles.extraHelper}>Boshlanish sanasi</Text>
        </View>
      </View>
      <Text style={styles.extraTitle}>Ishga kerakli tajriba va qobiliyatlar:</Text>
      <View style={styles.skillsContainer}>
        {renderSkills()}
      </View>
      <View style={styles.line}/>
      <Text style={styles.extraTitle}>Klient/Kompaniya haqida</Text>
      <View style={[styles.rowDirection, styles.clientInfo]}>
      <FastImage
        source={{uri:url}}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.clientImage}
      />
      <Text style={styles.clientName}>Asror Ne'matov</Text>
      </View>
      {/* Bottom absolute */}
    </ScrollView>
      <View style={styles.bottom}>
        <PrimaryButton
          width={width * 0.75}
          color={colors.primary}
          label="Rezyume jo'natish"
          style={styles.resumeButton}
        />
        <TouchableOpacity
          style={[styles.iconContainer]} 
          onPress={()=>setSaved(state=>!state)}
        >
          <Icon name={saved ? 'bookmark':'bookmark-outline'} color={colors.accent} size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 100,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  margin: (marginVertical, marginHorizontal) => ({
    marginVertical,
    marginHorizontal,
  }),
  locationBox: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  locationIcon: {
    marginRight: 15,
  },
  locationName: {
    fontSize: 16,
    color: '#5e5e5e'
  },
  line: {
    borderBottomWidth: 0.3,
    color: '#e6e6e6',
    marginVertical: 15,
  },
  contentText: {
    fontSize: 17,
  },
  extraDetail: {
    width: width/2 - 20
  },
  extraDetailsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap'
  },
  extraTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  extraHelper: {
    color: '#5e5e5e'
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  skillContainer: color => ({
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: color,
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 10,
  }),
  skillName: {
    color: '#fff'
  },
  clientInfo: {
    marginTop: 15,
  },
  clientImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderWidth: 0.5,
    borderRadius: 20,
    marginLeft: 10,
  },
})
export default JobDetails
