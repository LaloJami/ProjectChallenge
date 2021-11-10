import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { getSiteDetailsApi } from '../api/site';
import Header from '../components/siteDetails/Header';

export default function SiteDetailsScreen(props) {
  const [siteDetail, setSiteDetail] = useState(null);
  const {
    navigation,
    route: {params} 
  } = props;

  useEffect(()=>{
    (async ()=>{
      try {
        const response = await getSiteDetailsApi(params.id)
        setSiteDetail(response)
        
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params])
  if(!siteDetail) return null;
  return (
    <ScrollView>
      <Header name={siteDetail.name} contact={siteDetail.contacts} image={siteDetail.image} />
    </ScrollView>
  )
}
