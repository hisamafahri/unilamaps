import React, { ReactElement } from 'react'
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import CodeIcon from '../../../assets/svg/more/CodeIcon';
import ContactIcon from '../../../assets/svg/more/ContactIcon';
import DonationIllustration from '../../../assets/svg/more/DonationIllustration';
import FaqIcon from '../../../assets/svg/more/FaqIcon';
import OtherIcon from '../../../assets/svg/more/OtherIcon';
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color';

let screenWidth = Dimensions.get("window").width;

export default function More({ navigation }: any): ReactElement {
    return (
        <Base>
            <View style={styles.headerContainer}>
                <Text style={styles.bigText}>Lainnya</Text>
            </View>
            <TouchableHighlight underlayColor={COLORS.mainPurple} onPress={() => { navigation.navigate('Donation') }} style={{ marginHorizontal: 16, marginTop: 12, borderRadius: 16 }}>
                <View style={styles.donationBoxContainer}>
                    <View style={styles.donationBoxTextConatainer}>
                        <Text style={styles.donationBoxTitle}>DONASI</Text>
                        <Text style={styles.donationBoxDetails}>Jadi bagian dalam misi pengembangan Unila Maps!</Text>
                    </View>
                    <DonationIllustration />
                </View>
            </TouchableHighlight>

            <View style={styles.moreBoxContainer}>
                <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { }} style={{ flex: 1, marginRight: 6, borderRadius: 16 }}>
                    <View style={styles.moreBox}>
                        <CodeIcon />
                        <Text style={[styles.moreBoxText, { fontSize: 20 }]}>Meet the Developer</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { navigation.navigate('Faq') }} style={{ flex: 1, marginLeft: 6, borderRadius: 16 }}>
                    <View style={styles.moreBox}>
                        <FaqIcon style={{ alignSelf: 'flex-end' }} />
                        <Text style={styles.moreBoxText}>FAQ</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.moreBoxContainer}>
                <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { navigation.navigate('About') }} style={{ flex: 1, marginRight: 6, borderRadius: 16 }}>
                    <View style={styles.moreBox}>
                        <OtherIcon />
                        <Text style={styles.moreBoxText}>Tentang</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { navigation.navigate('Contact') }} style={{ flex: 1, marginLeft: 6, borderRadius: 16 }}>
                    <View style={styles.moreBox}>
                        <ContactIcon style={{ alignSelf: 'flex-end' }} />
                        <Text style={styles.moreBoxText}>Kontak</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </Base>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 24,
        marginHorizontal: 16,
        paddingRight: 16,
    },
    bigText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Bold',
        fontSize: 36
    },
    donationBoxContainer: {
        backgroundColor: COLORS.mainGreen,
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    donationBoxTextConatainer: {
        width: '50%'
    },
    donationBoxTitle: {
        color: COLORS.white,
        fontFamily: 'Rubik-Bold',
        fontSize: 20
    },
    donationBoxDetails: {
        color: COLORS.white,
        fontFamily: 'Rubik-Regular',
        fontSize: 16
    },
    moreBoxContainer: {
        marginHorizontal: 16,
        marginTop: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    moreBox: {
        height: 176,
        // height: (screenWidth / 2) - 44,
        borderRadius: 16,
        backgroundColor: COLORS.white,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    moreBoxText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Bold',
        fontSize: 24
    }
});
