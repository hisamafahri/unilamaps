import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon';
import ChevronIcon from '../../../assets/svg/helper/ChevronIcon';
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color';

export default function About({ navigation }: any): ReactElement {
    return (
        <Base>
            <View style={styles.headerContainer}>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                    <ArrowIcon />
                </TouchableWithoutFeedback>
                <Text style={styles.bigText}>Tentang</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}>Tentang aplikasi, syarat & ketentuan, dan kebijakan privasi.</Text>
            </View>

            <View>
                <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { }} style={styles.stickBoxContainer}>
                    <View style={styles.stickBox}>
                        <Text style={styles.stickBoxLeading}>Unila Maps</Text>
                        <Text style={styles.stickBoxTail}>© {new Date().getFullYear()} Hisam Fahri</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { }} style={styles.stickBoxContainer}>
                    <View style={styles.stickBox}>
                        <Text style={styles.stickBoxLeading}>Versi</Text>
                        <Text style={styles.stickBoxTail}>0.1.0</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { navigation.navigate('TermsAndConditions') }} style={styles.stickBoxContainer}>
                    <View style={styles.stickBox}>
                        <Text style={styles.stickBoxLeading}>Syarat dan Ketentuan</Text>
                        <ChevronIcon />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { navigation.navigate('PrivacyPolicy') }} style={styles.stickBoxContainer}>
                    <View style={styles.stickBox}>
                        <Text style={styles.stickBoxLeading}>Kebijakan Privasi</Text>
                        <ChevronIcon />
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
    },
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
    stickBoxLeading: {
        color: COLORS.black,
        fontFamily: 'Rubik-Medium',
        fontSize: 16
    },
    stickBoxTail: {
        color: COLORS.textGrey,
        fontFamily: 'Rubik-Light',
        fontSize: 16
    },
});

