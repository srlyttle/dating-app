import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from './screens/HomeScreen'
import { LoginScreen } from './screens/LoginScreen'
import { ChatScreen } from './screens/ChatScreen'
import { useAuthProvider } from './context/useAuthProvider'

export type RootStackParamList = {
  Home: undefined
  Chat: undefined
  Login: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()
export const StackNavigator = () => {
  const { state: user } = useAuthProvider()
  console.log('user', user)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
