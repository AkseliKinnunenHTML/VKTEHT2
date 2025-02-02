import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function secondscreen({route}) {
  return (
    <View style={StyleSheet.container}>
           <Text>second screen</Text>
           <Text>second screen</Text>
           <Text>{route.params?.message}</Text>
         
       </View>
  )
}

const styles = StyleSheet.create({
    container: {
     padding: 10,
    }
 
 })