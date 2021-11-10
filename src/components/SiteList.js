import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import SiteCard from './SiteCard';

export default function SiteList(props) {
  const { sites } = props;
  return (
    <FlatList
      data={sites}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(site)=> String(site.id)}
      renderItem={({item})=>(
        <SiteCard site={item} />
      )}
      contentContainerStyle={styles.flatListContentContainer}
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  }
})