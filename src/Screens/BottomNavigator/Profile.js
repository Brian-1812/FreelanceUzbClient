import React from 'react'
import {
  View, Text, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import IconAlt from 'react-native-vector-icons/Ionicons'
import Icon from '../../Assets/svg/index'

const { width } = Dimensions.get('window')
const url = 'https://firebasestorage.googleapis.com/v0/b/new-journey-24309.appspot.com/o/userImages%2F1191.jpg?alt=media&token=2bf148dd-21b1-4b65-b1dd-88ac391e401b'

const Profile = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const navigate = value => () => navigation.navigate(value)
  return (
    <View style={[styles.container]}>
      <View style={styles.shortProfile}>
      <FastImage
        source={{uri:url}}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />
      <View style={styles.profileText}>
        <Text style={styles.name}>Asror Ne'matov</Text>
        <Text style={styles.occupation}>Talaba</Text>
      </View>
      </View>
      <View style={styles.line}/>
      <TouchableOpacity
        style={styles.profileSection}
        onPress={navigate('PersonalData')}
      >
        <View style={styles.rowDirection}>
          <View style={styles.iconContainer}>
            <Icon.User width={28} height={28}/>
          </View>
          <Text style={styles.sectionTitle}>Mening ma'lumotlarim</Text>
        </View>
        <IconAlt name='chevron-forward-outline' size={20}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileSection}
        onPress={navigate('Settings')}
      >
        <View style={styles.rowDirection}>
          <View style={styles.iconContainer}>
            <Icon.Settings width={28} height={28}/>
          </View>
          <Text style={styles.sectionTitle}>Sozlamalar</Text>
        </View>
        <IconAlt name='chevron-forward-outline' size={20}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileSection}
        onPress={navigate('Resume')}
      >
        <View style={styles.rowDirection}>
          <View style={styles.iconContainer}>
            <Icon.Resume width={28} height={28}/>
          </View>
          <Text style={styles.sectionTitle}>Rezyume</Text>
        </View>
        <IconAlt name='chevron-forward-outline' size={20}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileSection}
        onPress={navigate('SavedJobs')}
      >
        <View style={styles.rowDirection}>
          <View style={styles.iconContainer}>
            <Icon.Bookmark width={28} height={28}/>
          </View>
          <Text style={styles.sectionTitle}>Saqlangan ishlar</Text>
        </View>
        <IconAlt name='chevron-forward-outline' size={20}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileSection}
        onPress={navigate('MyJobs')}
      >
        <View style={styles.rowDirection}>
          <View style={[styles.iconContainer, styles.paddingLeft(5)]}>
            <Icon.Shared width={32} height={32}/>
          </View>
          <Text style={styles.sectionTitle}>Men qo'ygan ishlar</Text>
        </View>
        <IconAlt name='chevron-forward-outline' size={20}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileSection}>
        <View style={styles.rowDirection}>
          <View style={[styles.iconContainer, styles.paddingLeft(5)]}>
            <Icon.LogOut width={28} height={28}/>
          </View>
          <Text style={styles.sectionTitle}>Profildan chiqish</Text>
        </View>
        <IconAlt name='chevron-forward-outline' size={20}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  shortProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  profileText: {
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  occupation: {
    fontSize: 16,
    color: '#5e5e5e'
  },
  line: {
    borderWidth: 0.3,
    borderColor:'#d1d1d1'
  },
  profileSection: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#f2eeda',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  sectionTitle: {
    marginLeft: 20,
  },
  paddingLeft: paddingLeft => ({
    paddingLeft,
  }),
})

export default Profile
