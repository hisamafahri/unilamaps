import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ChevronIcon from '../../../assets/svg/helper/ChevronIcon'
import { COLORS } from '../../constant/Color'

export default function StickBox({ onPress, label, leadIcon, tail = <ChevronIcon /> }: any): ReactElement {
    return (
        <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={onPress} style={styles.stickBoxContainer}>
            <View style={styles.stickBox}>
                <View style={styles.stickBoxLead}>
                    {leadIcon ? <View style={{marginRight: 12}}>{leadIcon}</View> : leadIcon}
                    <Text style={styles.stickBoxLeadText}>{label}</Text>
                </View>
                {tail}
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    stickBoxContainer: {
        borderRadius: 16,
        marginTop: 12,
        marginHorizontal: 16,
    },
    stickBox: {
        borderRadius: 16,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingVertical: 20,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    stickBoxLead: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    stickBoxLeadText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Medium',
        fontSize: 16,
    },
    stickBoxTail: {
        color: COLORS.textGrey,
        fontFamily: 'Rubik-Light',
        fontSize: 16
    },
})
