import { Linking } from "react-native"

export const pressCall = (url) => {
  Linking.openURL(`tel:${url}`)
}

export const pressEmail = (url) => {
  Linking.openURL(`mailto:${url}`)
}

export const openMap = (address) => {
  const url = 'https://www.google.com/maps/search/?api=1&query=';
  Linking.openURL(url+address);
  //console.log(address.replace(/ /gi, '+'))
} 