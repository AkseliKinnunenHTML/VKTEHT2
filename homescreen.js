
import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function homescreen({navigation}) {


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        <Ionicons name="arrow-forward" size={24} onPress={() => navigation.navigate('Second')} />
      }
    })
  })
 
  return (
    <View style={StyleSheet.container}>
        
        <Text>homescreen</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    padding: 20,
   }

})