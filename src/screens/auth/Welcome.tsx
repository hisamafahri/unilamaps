import React, { ReactElement } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export default function Welcome({navigation}: any): ReactElement {
    return (
        <View>
            <Text>Welcome Page</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                <Text>Go</Text>
            </TouchableHighlight>
        </View>
    )
}
