import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Tabs from './navigation/Tabs'


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tabs/>
    </SafeAreaView>
  )
}

export default App