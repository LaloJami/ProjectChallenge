import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

export default function SiteCard(props) {
  const {site} = props;

  const goToSite = () => {
    console.log(`You going to: ${site.name}`)
  }

  return (
    <TouchableWithoutFeedback onPress={goToSite}>
      <View>
        <View>
          <View>
            {/* <Image source={{uri: site.image}}  /> */}
            <View>
              <Text>{site.name}</Text>
              <Text>{site.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

