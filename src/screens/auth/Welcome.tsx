import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import TargetIcon from '../../../assets/svg/helper/TargetIcon';
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color';

export default function Welcome({ navigation }: any): ReactElement {
    return (
        <Base>
            <View style={styles.locationPinner}>
                <TargetIcon />
                <Text style={styles.pinnerText}>Jl Seroja</Text>
            </View>
            <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Selamat Datang di</Text>
                <Text style={styles.welcomeText}>Universitas Lampung</Text>
            </View>
        </Base>
    )
}

const styles = StyleSheet.create({
    locationPinner: {
        marginTop: 12,
        marginHorizontal: 16,
        alignSelf: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: COLORS.white,
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pinnerText: {
        marginLeft: 12,
        fontFamily: 'Rubik-Regular',
        fontSize: 14
    },
    welcomeTextContainer: {
        marginTop: 36
    },
    welcomeText: {
        textAlign: 'center'
    }
});