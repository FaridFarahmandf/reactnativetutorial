import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/globalStyles'

export default function Home() {
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.titleText}>Home</Text>
    </View>
  )
}

