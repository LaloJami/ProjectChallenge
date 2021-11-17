import React, {useState, useCallback} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { size } from 'lodash-es';
import useAuth from '../../hooks/useAuth'
import {getSiteFavoriteApi} from '../../api/favorite'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function UserData() {
  const {auth, logout} = useAuth();
  const [total, setTotal] = useState(0)

  useFocusEffect(
    useCallback(()=>{
      (async () => {
        try {
          const response = await getSiteFavoriteApi();
          setTotal(size(response))
        } catch (error) {
          setTotal(0)
        }
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu name='user' title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu name='vcard' title="Username" text={`${auth.username}`} />
        <ItemMenu name='envelope-o' title="Email" text={`${auth.email}`} />
        <ItemMenu name='star' title="Total Favorite" text={`${total} sites`} />
      </View>
      <Button title="Logout" onPress={logout} style={styles.btnLogoun} />
    </View>
  )
}

function ItemMenu(props) {
  const { title, text, name } = props;

  return (
    <View style={styles.itemMenu}>
      <Icon name={name} size={20} style={{marginRight: 10, width: 22}}/>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogoun: {
    paddingTop: 20,
  },
});