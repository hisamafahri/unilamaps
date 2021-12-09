import React, { ReactElement } from 'react'
import { Linking, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import EmailIcon from '../../../assets/svg/social/EmailIcon'
import GitHubIcon from '../../../assets/svg/social/GitHubIcon'
import InstagramIcon from '../../../assets/svg/social/InstagramIcon'
import TwitterIcon from '../../../assets/svg/social/TwitterIcon'
import WebIcon from '../../../assets/svg/social/WebIcon'
import Base from '../../component/container/Base'
import StickBox from '../../component/navigation/StickBox'
import { COLORS } from '../../constant/Color'

export default function Developer({ navigation }: any): ReactElement {
    const openLinking = async (url: any) => {
        const isSupported = await Linking.canOpenURL(url)
        if (isSupported) {
            await Linking.openURL(url)
        } else {
            console.log('not supported link');
            navigation.navigate('WebViewPage', { link: url })
        }
    }
    return (
        <Base>
            <View style={styles.headerContainer}>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                    <ArrowIcon />
                </TouchableWithoutFeedback>
                <Text style={styles.bigText}>Developer</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}>Hai! Hisam Ahmad Fahri di sini. Feel free to reach out to me if you have any inquiries or just wanna say hi. :)</Text>
            </View>

            <StickBox onPress={() => openLinking('https://instagram.com/hisamafahri')} label='@HisamAFahri' leadIcon={<InstagramIcon />} />
            <StickBox onPress={() => openLinking('https://twitter.com/hisamafahri')} label='@HisamAFahri' leadIcon={<TwitterIcon />} />
            <StickBox onPress={() => openLinking('https://www.github.com/hisamafahri')} label='@HisamAFahri' leadIcon={<GitHubIcon />} />
            <StickBox onPress={() => openLinking('https://hisamafahri.com')} label='hisamafahri.com' leadIcon={<WebIcon />} />
            <StickBox onPress={() => openLinking('mailto:me@hisamafahri.com')} label='me@hisamafahri.com' leadIcon={<EmailIcon />} />
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


