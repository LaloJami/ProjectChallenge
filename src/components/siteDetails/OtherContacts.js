import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function OtherContacts(props) {

  const { contact } = props;
  const listContact = contact.slice(1);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontWeight: 'bold'}}>Other Contacts</Text>
      </View>

      <View style={styles.contentInfo}>
        {listContact.map((contact, index)=>(
          <View style={styles.textInfo} key={index}>
            <Text style={styles.contactName}>{contact.name}</Text>
            <Text style={styles.phoneNumber}>{contact.phone}</Text>
          </View>
        ))}
        
      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "30%",
    padding: 10,
  },
  title: {
    backgroundColor: "#2587be",
    borderWidth: 1,
    paddingLeft: 10,
  },
  contentInfo: {
    backgroundColor: '#92cbdf',
    borderWidth: 1,
    borderTopWidth: 0,
    flex: 1,
    flexDirection: 'column',
    paddingTop: 5,
    marginBottom: 5,
  },
  textInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contactName: {
    paddingLeft: 10,
  },
  phoneNumber: {
    paddingRight: 10,
  }
})