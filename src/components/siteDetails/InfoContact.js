import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { pressCall, pressEmail, openMap } from '../../utils/functions';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function InfoContact(props) {
  const {
    address,
    contact
  } = props;
  
  const contactInfo = [{phone: 'Not registered', email: 'Not Registered'}]
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>Address:</Text>
      <View style={styles.address}>
        <Icon 
          style={styles.fontIcon} 
          name='map-marker' 
          size={21}
          onPress={()=>openMap(address)}
        />
        <Text style={styles.textInfo} onPress={()=>openMap(address)}>{address}</Text>
      </View>
      <Text style={styles.textLabel}>Phone: </Text>
      <View style={styles.phoneInfo}>
        {contact.length > 0 ? (
          <>
          <Icon 
            style={styles.fontIcon} 
            name='phone' 
            size={20}
            onPress={()=>pressCall(contact[0].phone)}
          />
          <Text style={styles.textPhoneInfo} onPress={()=>pressCall(contact[0].phone)}>{contact[0].phone}</Text>
          </>
        ):(
          <>
          <Icon 
            style={styles.fontIcon} 
            name='phone' 
            size={20}
          />
          <Text style={styles.textPhoneInfo}>{contactInfo[0].phone}</Text>
          </>
        )}
        <Text style={styles.phoneInfoText}>Work</Text>
      </View>
      {(typeof(contact[0]) == 'object' && 'phone_home' in contact[0]) ? 
        <View style={styles.phoneInfo}>
          <Icon 
            style={styles.fontIcon} 
            name='phone' 
            size={20}
            onPress={()=>pressCall(contact[0].phone_home)}
          />
          <Text style={styles.textPhoneInfo} onPress={()=>pressCall(contact[0].phone_home)} >{contact[0].phone_home}</Text>
          <Text style={styles.phoneInfoText}>Home</Text>
        </View>: true}
      <Text style={styles.textLabel}>Email: </Text>
      <View style={styles.emailInfo}>
        {contact.length > 0 ? (
          <>
          <Icon 
            style={styles.fontIcon} 
            name='envelope-o' 
            size={20}
            onPress={()=>pressEmail(contact[0].email)}
          />
          <Text style={styles.textPhoneInfo} onPress={()=>pressEmail(contact[0].email)}>{contact[0].email}</Text>
          </>
        ):(
          <Text style={styles.textPhoneInfo}>{contactInfo[0].email}</Text>
        )}
        <Text style={styles.emailInfoText}>Work</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 10
  },
  address: {
    flex: 1,
    flexDirection: 'row'
  },
  fontIcon: {
    marginRight: 7,
    color: '#208feb'
  },
  textLabel: {
    fontWeight: 'bold',
    marginTop: 5 
  },
  textInfo: {
    paddingBottom: 15,
  },
  phoneInfo: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
    paddingBottom: 5
  },
  textPhoneInfo: {
    width: 200
  },
  phoneInfoText:{
    fontWeight: 'bold'
  },
  emailInfo: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
  },
  textemailInfo: {
    width: 200
  },
  emailInfoText:{
    fontWeight: 'bold'
  }
})