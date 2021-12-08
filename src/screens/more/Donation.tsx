import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import CopyIcon from '../../../assets/svg/helper/CopyIcon'
import OvoIcon from '../../../assets/svg/payment/OvoIcon'
import Base from '../../component/container/Base'
import DonationBox from '../../component/navigation/DonationBox'
import { COLORS } from '../../constant/Color'

export default function Donation({ navigation }: any): ReactElement {
    return (
        <Base>
            <View style={styles.headerContainer}>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                    <ArrowIcon />
                </TouchableWithoutFeedback>
                <Text style={styles.bigText}>Donasi</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}>Donasi untuk pengembangan Unila Maps! Donasi kamu akan sangat membantu lho.</Text>
            </View>

            <DonationBox />
            <DonationBox />
        </Base>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 24,
        marginHorizontal: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bigText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Bold',
        fontSize: 36,
        marginLeft: 24
    },
    detailContainer: {
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 28
    },
    detailText: {
        color: COLORS.textGrey,
        fontFamily: 'Rubik-Light',
        fontSize: 16
    }
});

