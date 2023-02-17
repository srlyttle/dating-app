import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native'
import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth, authRequestConfig } from '../firebase'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()

export const LoginScreen = () => {
  const [request, response, promptAsync] = Google.useAuthRequest(
    authRequestConfig,
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log('login error', error)
    }
  }
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log('login error', error)
    }
  }
  return (
    <KeyboardAvoidingView className="pt-4 flex-1 justify-center">
      <View>
        <TextInput
          placeholder="Email"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <View>
        <TouchableOpacity
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onPress={handleLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
        <Text>Register</Text>
        <Button
          title="Google 111"
          onPress={() => promptAsync({ useProxy: true, showInRecents: true })}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
