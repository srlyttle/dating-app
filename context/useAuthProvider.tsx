import React, { useContext } from 'react'
import AuthContext from './AuthContext'

export const useAuthProvider = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('Please ensure your component is wrapped in AuthContext')
  }

  return authContext
}
