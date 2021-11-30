import React, { ReactElement } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Base from '../../component/container/Base'

export default function Welcome({navigation}: any): ReactElement {
    return (
        <Base>
            <Text style={{fontFamily: 'MavenPro-Black'}}>Welcome Page</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                <Text>Go</Text>
            </TouchableHighlight>
        </Base>
    )
}
