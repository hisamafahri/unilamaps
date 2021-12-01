import React, { ReactElement } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import FEBIcon from '../../../assets/svg/faculty/FEBIcon'
import FHIcon from '../../../assets/svg/faculty/FHIcon'
import FISIPIcon from '../../../assets/svg/faculty/FISIPIcon'
import FKIcon from '../../../assets/svg/faculty/FKIcon'
import FKIPIcon from '../../../assets/svg/faculty/FKIPIcon'
import FMIPAIcon from '../../../assets/svg/faculty/FMIPAIcon'
import FPIcon from '../../../assets/svg/faculty/FPIcon'
import FTIcon from '../../../assets/svg/faculty/FTIcon'
import UniversityIcon from '../../../assets/svg/faculty/University'
import SearchIcon from '../../../assets/svg/helper/SearchIcon'
import Base from '../../component/container/Base'
import GroupBox from '../../component/navigation/GroupBox'
import { COLORS } from '../../constant/Color'

export default function Explore(): ReactElement {
    return (
        <Base>
            <View style={styles.headerContainer}>
                <Text style={styles.bigText}>Jelajahi</Text>
                <TouchableWithoutFeedback onPress={() => { }}>
                    <SearchIcon />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}>Jelajahi tempat-tempat menarik di <Text style={{ fontWeight: '500' }}>Universitas Lampung</Text>!</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.facultySliderContainer}>
                    <GroupBox onPress={() => { }} label='Universitas' icon={<UniversityIcon />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { }} label='FEB' icon={<FEBIcon />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { }} label='FH' icon={<FHIcon />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { }} label='FISIP' icon={<FISIPIcon />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { }} label='FK' icon={<FKIcon />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { }} label='FKIP' icon={<FKIPIcon />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { }} label='FMIPA' icon={<FMIPAIcon />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { }} label='FP' icon={<FPIcon />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { }} label='FT' icon={<FTIcon />} />
                </View>
            </ScrollView>
        </Base>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 12,
        marginHorizontal: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bigText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Bold',
        fontSize: 36
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
    facultySliderContainer: {
        marginHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});
