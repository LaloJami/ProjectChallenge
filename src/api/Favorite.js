import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";
import { includes, pull } from "lodash";

export async function getSiteFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || '[]');
  } catch (error) {
    throw error;
  }
}

export async function addSiteFavoriteApi(id) {
  try {
    const favorites = await getSiteFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}
export async function isSiteFavoriteApi(id){
  try {
    const response = await getSiteFavoriteApi();
    return includes(response, id);
  } catch (error) {
    throw error
  }
}

export async function removeSiteFavoriteApi(id){
  try {
    const favorite = await getSiteFavoriteApi();
    const newFavorite = pull(favorite, id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorite))
  } catch (error) {
    throw error
  }
}