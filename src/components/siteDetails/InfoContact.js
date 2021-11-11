import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function InfoContact(props) {
  const {
    address,
    contact
  } = props;
  const contactInfo = [{phone: 'Not registered', email: 'Not Registered'}]
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textLabel}>Address:</Text>
        <Text style={styles.textInfo}>{address}</Text>
      </View>
      <Text style={styles.textLabel}>Phone: </Text>
      <View style={styles.phoneInfo}>
        <Text style={styles.textPhoneInfo}>{contact.length > 0 ? contact[0].phone : contactInfo[0].phone}</Text>
        <Text style={styles.phoneInfoText}>Work</Text>
      </View>
      {(typeof(contact[0]) == 'object' && 'phone_home' in contact[0]) ? 
        <View style={styles.phoneInfo}>
          <Text style={styles.textPhoneInfo}>{contact[0].phone_home}</Text>
          <Text style={styles.phoneInfoText}>Home</Text>
        </View>: true}
      <Text style={styles.textLabel}>Email: </Text>
      <View style={styles.emailInfo}>
        <Text style={styles.textemailInfo}>{contact.length > 0 ? contact[0].email : contactInfo[0].email}</Text>
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