import { Linking } from "react-native"

export const pressCall = (url) => {
  Linking.openURL(`tel:${url}`)
}

export const pressEmail = (url) => {
  Linking.openURL(`mailto:${url}`)
}