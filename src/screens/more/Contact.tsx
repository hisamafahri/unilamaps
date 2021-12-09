import React, { ReactElement } from 'react'
import { Linking, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import EmailIcon from '../../../assets/svg/social/EmailIcon'
import InstagramIcon from '../../../assets/svg/social/InstagramIcon'
import TwitterIcon from '../../../assets/svg/social/TwitterIcon'
import Base from '../../component/container/Base'
import StickBox from '../../component/navigation/StickBox'
import { COLORS } from '../../constant/Color'

export default function Contact({ navigation }: any): ReactElement {
    const openLinking = async (url: any) => {
        const isSupported = await Linking.canOpenURL(url)
        if (isSupported) {
            await Linking.openURL(url)
        } else {
            navigation.navigate('WebViewPage', { link: url })
        }
    }
    return (
        <Base>
            <View style={styles.headerContainer}>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                    <ArrowIcon />
                </TouchableWithoutFeedback>
                <Text style={styles.bigText}>Kontak</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}>Hai! Mau request fitur? Atau ada hal lain? Hubungi kami ya! Nyapa aja juga boleh kok.</Text>
            </View>

            <StickBox onPress={() => openLinking('https://instagram.com/unilamaps')} label='@unilamaps' leadIcon={<InstagramIcon />} />
            <StickBox onPress={() => openLinking('https://twitter.com/unilamaps')} label='@unilamaps' leadIcon={<TwitterIcon />} />
            <StickBox onPress={() => openLinking('mailto:unilamaps@gmail.com')} label='unilamaps@gmail.com' leadIcon={<EmailIcon />} />
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


