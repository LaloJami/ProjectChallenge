import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import { getSiteDetailsApi } from '../api/site';
import Header from '../components/siteDetails/Header';
import InfoContact from '../components/siteDetails/InfoContact';
import OtherContacts from '../components/siteDetails/OtherContacts';
import Favorite from '../components/siteDetails/Favorite';
import useAuth from '../hooks/useAuth';

export default function SiteDetailsScreen(props) {
  const [siteDetail, setSiteDetail] = useState(null);
  const {
    navigation,
    route: {params} 
  } = props;
  const { auth } = useAuth();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={siteDetail?.id}/>,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#000"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, siteDetail]);
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
      <InfoContact address={siteDetail.address} contact={siteDetail.contacts} />
      {siteDetail.contacts.length > 1 ? <OtherContacts contact={siteDetail.contacts} /> : true}
    </ScrollView>
  )
}
