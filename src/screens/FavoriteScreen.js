import React, {useState, useCallback} from 'react'
import { Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { getSiteFavoriteApi } from '../api/favorite';
import useAuth from '../hooks/useAuth'
import { getSiteDetailsApi } from '../api/site';
import SiteList from '../components/SiteList'

export default function FavoriteScreen() {
  const [sites, setSites] = useState([]);
  const { auth } = useAuth();

  console.log(sites);

  useFocusEffect(
    useCallback(() => {
      if(auth){
        (async () =>{
          const response = await getSiteFavoriteApi();
          console.log(response);
        
          const sitesArrays = []
          
          for await (const id of response) {
            const siteDetails = await getSiteDetailsApi(id)
            sitesArrays.push({
              id: siteDetails.id,
              name: siteDetails.name,
              address: siteDetails.address,
              image: siteDetails.image
            })
          }
          setSites(sitesArrays);
        })()
      }
    }, [auth])
  )
  
  return !auth ? (
    <Text>No login user</Text>
  ) : (
    <SiteList sites={sites}/>
  );
}
