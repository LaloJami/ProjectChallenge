import React, {useState, useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { getSiteFavoriteApi } from '../api/favorite';
import useAuth from '../hooks/useAuth'
import { getSiteDetailsApi } from '../api/site';
import SiteList from '../components/SiteList'
import NoLogged from '../components/NoLogged';

export default function FavoriteScreen() {
  const [sites, setSites] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if(auth){
        (async () =>{
          const response = await getSiteFavoriteApi();
        
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
    <NoLogged />
  ) : (
    <SiteList sites={sites}/>
  );
}
