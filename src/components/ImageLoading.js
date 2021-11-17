import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function ImageLoading(props) {
  return (
    <View style={styles.container}>
      <Image {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});