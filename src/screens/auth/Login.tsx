import { NavigationContainer } from '@react-navigation/native'
import React, { ReactElement } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export default function Login({ navigation }: any): ReactElement {
    return (
        <View>
            <Text>Login Page</Text>
            <TouchableHighlight onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableHighlight>
        </View>
    )
}
