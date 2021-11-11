import React, {useState, useEffect} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addSiteFavoriteApi, isSiteFavoriteApi, removeSiteFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {

  const {id} = props;
  const [isFavorite, setIsFavorite] = useState(undefined);

  const [reloadCheck, setReloadCheck] = useState(false)
  const Icon = isFavorite ? FontAwesome : FontAwesome5;
  useEffect(()=>{
    (async ()=>{
      try {
        const response = await isSiteFavoriteApi(id);
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  },[id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev)
  }

  const addFavorite = async () => {
    try {
      await addSiteFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.lof(error)
    }
  }

  const removeFavorite = async () => {
    try {
      await removeSiteFavoriteApi(id);
      setReloadCheck((prev) => !prev)
    } catch (error) {
      console.lof(error)
    }
  }
  return (
    <Icon 
      name="star" 
      color={"#208feb"} 
      size={20} 
      onPress={isFavorite ? removeFavorite : addFavorite } 
      style={{ marginRight: 20}} 
    />
  )
}
