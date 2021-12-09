import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import CopyIcon from '../../../assets/svg/helper/CopyIcon'
import OvoIcon from '../../../assets/svg/payment/OvoIcon'
import { COLORS } from '../../constant/Color'

export default function DonationBox({ onPress, paymentProvider = 'Provider', accountNumber = 'xxxx xxxx xxxx', accountName = 'Unila Maps', paymentProviderIcon = <OvoIcon /> }: any): ReactElement {
    return (
        <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={onPress} style={{ marginHorizontal: 16, borderRadius: 16, marginTop: 12 }}>
            <View style={styles.donationBoxContainer}>
                <View style={styles.donationBoxLine}>
                    <View>
                        <Text style={{ fontFamily: 'Rubik-Medium', fontSize: 24, color: COLORS.black }}>{accountNumber}</Text>
                        <Text style={{ fontFamily: 'Rubik-Light', fontSize: 14, color: COLORS.black }}>a.n. {accountName}</Text>
                    </View>
                    <CopyIcon />
                </View>

                <View style={styles.donationBoxLine}>
                    <View style={styles.donationBoxPaymentContainer}>
                        {paymentProviderIcon}
                    </View>
                    <Text style={{ fontFamily: 'Rubik-Bold', fontSize: 44, color: COLORS.black }}>{paymentProvider}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    donationBoxContainer: {
        height: 176,
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: COLORS.white,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    donationBoxLine: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    donationBoxPaymentContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 100,
        padding: 6,
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
