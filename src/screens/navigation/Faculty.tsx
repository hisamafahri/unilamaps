import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import FEBIcon from '../../../assets/svg/faculty/FEBIcon'
import FHIcon from '../../../assets/svg/faculty/FHIcon'
import FISIPIcon from '../../../assets/svg/faculty/FISIPIcon'
import FKIcon from '../../../assets/svg/faculty/FKIcon'
import FKIPIcon from '../../../assets/svg/faculty/FKIPIcon'
import FMIPAIcon from '../../../assets/svg/faculty/FMIPAIcon'
import FPIcon from '../../../assets/svg/faculty/FPIcon'
import FTIcon from '../../../assets/svg/faculty/FTIcon'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import Base from '../../component/container/Base'
import CircleBackButton from '../../component/navigation/CircleBackButton'
import GroupBox from '../../component/navigation/GroupBox'
import { COLORS } from '../../constant/Color'

export default function Faculty({ navigation }: any): ReactElement {
    return (
        <Base>
            <View style={styles.headerContainer}>
                <CircleBackButton onPress={() => { navigation.goBack() }} />
            </View>

            <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Di <Text style={[styles.welcomeText, { fontFamily: 'Rubik-Medium', color: COLORS.secondaryPurple }]}>Universitas Lampung</Text>, </Text>
                <Text style={styles.welcomeText}>ada banyak fakultas nih...</Text>
                <Text style={styles.bigText}>Mau ke {'\n'}fakultas mana?</Text>
            </View>

            <View style={styles.contentBoxContainer}>
                <GroupBox onPress={() => { }} label='FEB' icon={<FEBIcon strokeBlack={COLORS.black} strokePurple={COLORS.brightPurple} />} />
                <GroupBox onPress={() => { }} label='FH' icon={<FHIcon strokeBlack={COLORS.black} strokePurple={COLORS.brightPurple} />} />
                <GroupBox onPress={() => { }} label='FISIP' icon={<FISIPIcon strokeBlack={COLORS.black} strokePurple={COLORS.brightPurple} />} />
            </View>
            <View style={styles.contentBoxContainer}>
                <GroupBox onPress={() => { }} label='FK' icon={<FKIcon strokeBlack={COLORS.black} strokePurple={COLORS.brightPurple} />} />
                <GroupBox onPress={() => { }} label='FKIP' icon={<FKIPIcon strokeBlack={COLORS.black} strokePurple={COLORS.brightPurple} />} />
                <GroupBox onPress={() => { }} label='FMIPA' icon={<FMIPAIcon strokeBlack={COLORS.black} strokePurple={COLORS.brightPurple} />} />
            </View>
            <View style={styles.contentBoxContainer}>
                <GroupBox onPress={() => { }} label='FP' icon={<FPIcon strokeBlack={COLORS.black} strokePurple={COLORS.brightPurple} />} />
                <GroupBox onPress={() => { }} label='FT' icon={<FTIcon strokeBlack={COLORS.black} strokePurple={COLORS.brightPurple} />} />
            </View>
        </Base>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 4,
        marginTop: 24,
        marginHorizontal: 16,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
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

