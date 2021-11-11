import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addSiteFavoriteApi } from '../../api/Favorite';

export default function Favorite(props) {

  const {id} = props;

  const addFavorite = async () => {
    await addSiteFavoriteApi(id);
  }

  return (
    <Icon 
      name="star" 
      color={"#000"} 
      size={20} 
      onPress={addFavorite} 
      style={{ marginRight: 20}} 
    />
  )
}
