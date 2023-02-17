import { LogBox } from 'react-native'
import AuthProvider from './context/AuthProvider'
import { RootStackParamList, StackNavigator } from './StackNavigator'
// suppress this due to expo issue
LogBox.ignoreLogs([
  'Warning: Async Storage has been extracted from react-native core',
])
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  )
}
