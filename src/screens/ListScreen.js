import React, {useState, useEffect} from 'react'
import { Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSitesApi } from '../api/site';
import SiteList from '../components/SiteList';

export default function ListScreen() {

  const [ sites, setSites ] = useState([]);

  useEffect(()=>{
    (async () => {
      await loadSites();
    })()
  }, [])

  const loadSites = async () => {
    try {
      const response = await getSitesApi();
      
      const sitesArrays = []
      
      for await (const siteItem of response.sites) {
        
        sitesArrays.push({
          id: siteItem.id,
          name: siteItem.name,
          address: siteItem.address,
          image: siteItem.image
        })
        console.log(sitesArrays);
      }
      setSites(...sites, sitesArrays);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <SafeAreaView>
      <SiteList sites={sites}/>
    </SafeAreaView>
  )
}
