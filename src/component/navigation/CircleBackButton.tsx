import React, { ReactElement } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import { COLORS } from '../../constant/Color'

export default function CircleBackButton({ onPress }: any): ReactElement {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={COLORS.inactivePurple} style={{ borderRadius: 100 }}>
            <View style={styles.backButton}>
                <ArrowIcon />
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    backButton: {
        backgroundColor: COLORS.white,
        borderRadius: 100,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
});

