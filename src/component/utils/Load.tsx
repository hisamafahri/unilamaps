import React, { ReactElement } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constant/Color';


export default function Load({ text }: any): ReactElement {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={COLORS.mainPurple} />
            <Text style={styles.loadingText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    loadingText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        marginTop: 24,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        color: COLORS.textGrey
    }
});