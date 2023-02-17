import React from 'react'
import { Button, Text, View } from 'react-native'
// import { StackNavigationProp } from '@react-navigation/stack'
import type { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../StackNavigator'

export type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>
export const ChatScreen = () => {
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}
