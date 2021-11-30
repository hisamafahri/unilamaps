import React, { ReactElement } from 'react'
import { Text, View } from 'react-native'

export default function App(): ReactElement {
  return (
    <View style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
