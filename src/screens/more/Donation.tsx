import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import DanaIcon from '../../../assets/svg/payment/DanaIcon'
import GojekIcon from '../../../assets/svg/payment/GojekIcon'
import OvoIcon from '../../../assets/svg/payment/OvoIcon'
import Base from '../../component/container/Base'
import DonationBox from '../../component/navigation/DonationBox'
import { COLORS } from '../../constant/Color'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

export default function Donation({ navigation }: any): ReactElement {
    const copyToClipboard = ({ number, type }: any) => {
        Clipboard.setString(number);
        Snackbar.show({
            text: 'Nomor akun ' + type + ' disalin!',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: COLORS.mainPurple,
            fontFamily: 'Rubik-Regular',
            action: {
                text: 'Tutup',
                textColor: COLORS.white,
                onPress: () => Snackbar.dismiss(),
            },
        });
    };
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

            <DonationBox onPress={() => copyToClipboard({ number: '082179462536', type: 'OVO' })} accountName='Unila Maps' accountNumber='0821 7946 2536' paymentProvider='OVO' paymentProviderIcon={<OvoIcon />} />
            <DonationBox onPress={() => copyToClipboard({ number: '082179462536', type: 'Dana' })} accountName='Unila Maps' accountNumber='0821 7946 2536' paymentProvider='Dana' paymentProviderIcon={<DanaIcon />} />
            <DonationBox onPress={() => copyToClipboard({ number: '082179462536', type: 'GoPay' })} accountName='Unila Maps' accountNumber='0821 7946 2536' paymentProvider='GoPay' paymentProviderIcon={<GojekIcon />} />
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

