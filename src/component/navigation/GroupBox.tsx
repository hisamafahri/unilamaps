import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { COLORS } from '../../constant/Color'

export default function GroupBox({ onPress, label, icon, style, backgroundColor = COLORS.white, labelColor = COLORS.black }: any): ReactElement {
    return (
        <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={onPress} style={{ backgroundColor, borderRadius: 16, ...style }}>
            <View style={styles.contentBox}>
                {icon}
                <Text style={[styles.contentBoxText, { color: labelColor }]}>{label}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    contentBox: {
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBoxText: {
        marginTop: 8,
        fontFamily: 'Rubik-Regular',
        textAlign: 'center',
        fontSize: 12
    }
});