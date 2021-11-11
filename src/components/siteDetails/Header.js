import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header(props) {
  const {
    name,
    contact,
    image
  } = props;

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentImg}>
          <Image source={{uri: image}} style={styles.image}/>
        </View>
        <View style={styles.contentText}>
          <Text style={styles.textLabel} >Name</Text>
          <Text style={styles.textInfo} >{name}</Text>
          <Text style={styles.textLabel} >Main contact</Text>
          <Text style={styles.textInfo} >{contact.length > 0 ? contact[0].name : 'Not registered'}</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  contentImg: {
    marginLeft: 20 
  },
  image: {
    width: 150,
    height: 150
  },
  contentText: {
    fontSize: 20,
    marginLeft: 15,
    flexDirection: 'column',
    flex: 1
  },
  textLabel: {
    fontWeight: 'bold'
  },
  textInfo: {
    paddingBottom: 15
  }
})