import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon';
import ChevronIcon from '../../../assets/svg/helper/ChevronIcon';
import Base from '../../component/container/Base'
import StickBox from '../../component/navigation/StickBox';
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
                <StickBox label='Unila Maps' tail={<Text style={styles.stickBoxTail}>© {new Date().getFullYear()} Hisam Fahri</Text>} />
                <StickBox label='Versi' tail={<Text style={styles.stickBoxTail}>0.1.0</Text>} />
                <StickBox onPress={() => { navigation.navigate('TermsAndConditions') }} label='Syarat dan Ketentuan' />
                <StickBox onPress={() => { navigation.navigate('PrivacyPolicy') }} label='Kebijakan Privasi' />
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
    stickBoxTail: {
        color: COLORS.textGrey,
        fontFamily: 'Rubik-Light',
        fontSize: 16,
        marginRight: 4
    },
});

