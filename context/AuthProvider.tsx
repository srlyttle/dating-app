import React, { ReactNode } from 'react'
import AuthContext from './AuthContext'
import { onAuthStateChanged, User, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authLocal, setAuth] = React.useState<User | null>(null)
  const [authUser, setAuthUser] = React.useState<User | null>(null)
  const logout = async () => await signOut(auth)
  const [loadingInitial, setLoadingInitial] = React.useState(true)

  const [globalLoading, setGlobalLoading] = React.useState(false)

  React.useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // console.log('user', user)
          setAuthUser(user)
        } else {
          setAuthUser(null)
          console.log('no user')
        }
        setLoadingInitial(false)
      }),

    [],
  )

  const memoedValues = React.useMemo(
    () => ({
      state: authUser,
      dispatch: setAuth,
      signInWithGoogle,
      isLoading: globalLoading,
      setIsLoading: setGlobalLoading,
      logout,
    }),
    [authUser],
  )

  const signInWithGoogle = () => {}
  return (
    <AuthContext.Provider value={memoedValues}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
