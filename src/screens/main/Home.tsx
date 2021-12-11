import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import AdministrationIcon from '../../../assets/svg/activities/AdministrationIcon';
import BookIcon from '../../../assets/svg/activities/BookIcon';
import FoodIcon from '../../../assets/svg/activities/FoodIcon';
import LabIcon from '../../../assets/svg/activities/LabIcon';
import ParkingIcon from '../../../assets/svg/activities/ParkingIcon';
import PrayIcon from '../../../assets/svg/activities/PrayIcon';
import SportIcon from '../../../assets/svg/activities/SportIcon';
import ToiletIcon from '../../../assets/svg/activities/ToiletIcon';
import TargetIcon from '../../../assets/svg/helper/TargetIcon';
import Base from '../../component/container/Base'
import GroupBox from '../../component/navigation/GroupBox';
import { COLORS } from '../../constant/Color';

export default function Home({ navigation }: any): ReactElement {
    return (
        <Base>
            <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={() => { }} style={styles.locationPinnerContainer}>
                <View style={styles.locationPinner}>
                    <TargetIcon />
                    <Text style={styles.pinnerText}>Jl Seroja...</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Selamat Datang di</Text>
                <Text style={[styles.welcomeText, { fontFamily: 'Rubik-Medium', color: COLORS.secondaryPurple }]}>Universitas Lampung</Text>
                <Text style={styles.bigText}>Mau ngapain {'\n'}hari ini?</Text>
            </View>

            <View style={styles.contentBoxContainer}>
                <GroupBox onPress={() => { navigation.navigate('Faculty') }} label='Kuliah' icon={<BookIcon />} />
                <GroupBox onPress={() => { }} label='Makan' icon={<FoodIcon />} />
                <GroupBox onPress={() => { }} label='Praktikum' icon={<LabIcon />} />
            </View>
            <View style={styles.contentBoxContainer}>
                <GroupBox onPress={() => { }} label='Ibadah' icon={<PrayIcon />} />
                <GroupBox onPress={() => { }} label='Toilet' icon={<ToiletIcon />} />
                <GroupBox onPress={() => { }} label='Olahraga' icon={<SportIcon />} />
            </View>
            <View style={styles.contentBoxContainer}>
                <GroupBox onPress={() => { }} label='Parkir' icon={<ParkingIcon />} />
                <GroupBox onPress={() => { }} label='Admin' icon={<AdministrationIcon />} />
            </View>

            {/* To make sure the content still visible (24px) on top of bottom bar navigation */}
            <View style={{ height: 24, width: '100%' }}></View>
        </Base>
    )
}

const styles = StyleSheet.create({
    locationPinnerContainer: {
        marginTop: 12,
        marginHorizontal: 16,
        alignSelf: 'flex-start',
        borderRadius: 100,
    },
    locationPinner: {
        borderRadius: 100,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pinnerText: {
        color: COLORS.black,
        marginLeft: 12,
        fontFamily: 'Rubik-Regular',
        fontSize: 14
    },
    welcomeTextContainer: {
        marginTop: 36,
        marginBottom: 28,
    },
    welcomeText: {
        color: COLORS.textGrey,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Rubik-Light',
    },
    bigText: {
        color: COLORS.black,
        marginTop: 12,
        fontFamily: 'Rubik-Bold',
        textAlign: 'center',
        fontSize: 36
    },
    contentBoxContainer: {
        marginHorizontal: 16,
        marginTop: 24,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    contentBox: {
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white
    },
    contentBoxText: {
        color: COLORS.black,
        marginTop: 8,
        fontFamily: 'Rubik-Regular',
        textAlign: 'center',
        fontSize: 12
    }
});