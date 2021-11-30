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
import { COLORS } from '../../constant/Color';

export default function Welcome({ navigation }: any): ReactElement {
    return (
        <Base>
            <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={styles.locationPinnerContainer}>
                <View style={styles.locationPinner}>
                    <TargetIcon />
                    <Text style={styles.pinnerText}>Jl Seroja...</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Selamat Datang di</Text>
                <Text style={[styles.welcomeText, { fontFamily: 'Rubik-Medium' }]}>Universitas Lampung!</Text>
                <Text style={styles.bigText}>Mau ngapain {'\n'}hari ini?</Text>
            </View>

            <View style={styles.contentBoxContainer}>
                <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={{ borderRadius: 16, }}>
                    <View style={styles.contentBox}>
                        <BookIcon />
                        <Text style={styles.contentBoxText}>Kuliah</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={{ borderRadius: 16, }}>
                    <View style={styles.contentBox}>
                        <FoodIcon />
                        <Text style={styles.contentBoxText}>Makan</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={{ borderRadius: 16, }}>
                    <View style={styles.contentBox}>
                        <LabIcon />
                        <Text style={styles.contentBoxText}>Praktikum</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.contentBoxContainer}>
                <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={{ borderRadius: 16, }}>
                    <View style={styles.contentBox}>
                        <PrayIcon />
                        <Text style={styles.contentBoxText}>Ibadah</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={{ borderRadius: 16, }}>
                    <View style={styles.contentBox}>
                        <ToiletIcon />
                        <Text style={styles.contentBoxText}>Toilet</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={{ borderRadius: 16, }}>
                    <View style={styles.contentBox}>
                        <SportIcon />
                        <Text style={styles.contentBoxText}>Olahraga</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.contentBoxContainer}>
                <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={{ borderRadius: 16, }}>
                    <View style={styles.contentBox}>
                        <ParkingIcon />
                        <Text style={styles.contentBoxText}>Parkir</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={() => { }} style={{ borderRadius: 16, }}>
                    <View style={styles.contentBox}>
                        <AdministrationIcon />
                        <Text style={styles.contentBoxText}>Admin</Text>
                    </View>
                </TouchableHighlight>
            </View>
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
        marginLeft: 12,
        fontFamily: 'Rubik-Regular',
        fontSize: 14
    },
    welcomeTextContainer: {
        marginTop: 36
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
        // maxWidth: 96,
        // maxHeight: 96,
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