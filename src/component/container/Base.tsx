import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Base = ({ children }: any) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex: 1}} keyboardVerticalOffset={0}>
                <ScrollView>
                    <SafeAreaView>
                        <StatusBar backgroundColor="#EEF4F6" barStyle="dark-content" />
                        {children}
                    </SafeAreaView>
                </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Base