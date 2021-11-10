import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

export default function SiteCard(props) {
  const {site} = props;

  const goToSite = () => {
    console.log(`You going to: ${site.name}`)
  }

  return (
    <TouchableWithoutFeedback onPress={goToSite}>
      <View style={styles.card} >
        <View style={styles.spacing} >
          <View style={styles.bgStyles}>
            <View style={styles.styleCardImage} >
              <Image source={{uri: site.image}} style={styles.image} />
            </View>
            <View style={styles.styleCard}>
              <Text style={styles.cardName}>{site.name}</Text>
              <Text style={styles.cardAddress}>{site.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyles: {
    backgroundColor: "grey",
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    // justifyContent: 'center'
  },
  styleCardImage: {
    marginLeft: 10,
    marginRight: 10,
  },
  styleCard: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    flex: 1
  },
  image: {
    width: 90,
    height: 90,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  cardAddress: {
    fontSize: 18,
    color: '#fff',
    height: 'auto',
  }

})