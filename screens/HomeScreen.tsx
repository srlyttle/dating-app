import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { useAuthProvider } from '../context/useAuthProvider'
import { RootStackParamList } from '../StackNavigator'
import { ChatScreenRouteProp } from './ChatScreen'
import { auth } from '../firebase'
export const HomeScreen = () => {
  const navigation = useNavigation()

  // we want to set specific screen options  - best for dom manipulation
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to chat" onPress={() => navigation.navigate('Chat')} />

      <Button title="signout" onPress={() => signOut(auth)} />
    </View>
  )
}
