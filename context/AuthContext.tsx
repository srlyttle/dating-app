import { User } from 'firebase/auth'
import React from 'react'

export type AuthContextType = {
  state?: User | null
  dispatch: React.Dispatch<React.SetStateAction<User | null>>
  signInWithGoogle: () => void
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  logout: () => void
}

const AuthContext = React.createContext<AuthContextType | null>(null)

AuthContext.displayName = 'AuthContext'

export default AuthContext
