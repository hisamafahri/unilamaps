import React, { ReactElement, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
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
import LocationBox from '../../component/navigation/LocationBox'
import { COLORS } from '../../constant/Color'

const imageUrl = 'https://cdn.wallpapersafari.com/37/51/hPGkYK.jpg'
// const imageUrl = 'https://i.imgur.com/tjwjMC8.png'

export default function Explore({navigation}:any): ReactElement {
    const [selectedArea, setSelectedArea] = useState('uni')
    const [areaText, setAreaText] = useState('Area Universitas')
    function changeAreaText(area: any) {
        if (area == 'uni') {
            setAreaText('Area Universitas')
        } else if (area == 'feb') {
            setAreaText('Fakultas Ekonomi & Bisnis')
        } else if (area == 'fh') {
            setAreaText('Fakultas Hukum')
        } else if (area == 'fisip') {
            setAreaText('Fakultas Ilmu Sosial dan Ilmu Politik')
        } else if (area == 'fk') {
            setAreaText('Fakultas Kedokteran')
        } else if (area == 'fkip') {
            setAreaText('Fakultas Keguruan dan Ilmu Pendidikan')
        } else if (area == 'fmipa') {
            setAreaText('Fakultas Matematika dan Ilmu Pengetahuan Alam')
        } else if (area == 'fp') {
            setAreaText('Fakultas Pertanian')
        } else if (area == 'ft') {
            setAreaText('Fakultas Teknik')
        } else {
            setAreaText('Area Lainnya')
        }
    }
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
                    <GroupBox onPress={() => { setSelectedArea('uni'), changeAreaText('uni') }} label='Universitas' backgroundColor={selectedArea == 'uni' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'uni' ? COLORS.white : COLORS.black} icon={<UniversityIcon strokeBlack={selectedArea == 'uni' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'uni' ? COLORS.white : COLORS.brightPurple} />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { setSelectedArea('feb'), changeAreaText('feb') }} label='FEB' backgroundColor={selectedArea == 'feb' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'feb' ? COLORS.white : COLORS.black} icon={<FEBIcon strokeBlack={selectedArea == 'feb' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'feb' ? COLORS.white : COLORS.brightPurple} />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { setSelectedArea('fh'), changeAreaText('fh') }} label='FH' backgroundColor={selectedArea == 'fh' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'fh' ? COLORS.white : COLORS.black} icon={<FHIcon strokeBlack={selectedArea == 'fh' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'fh' ? COLORS.white : COLORS.brightPurple} />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { setSelectedArea('fisip'), changeAreaText('fisip') }} label='FISIP' backgroundColor={selectedArea == 'fisip' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'fisip' ? COLORS.white : COLORS.black} icon={<FISIPIcon strokeBlack={selectedArea == 'fisip' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'fisip' ? COLORS.white : COLORS.brightPurple} />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { setSelectedArea('fk'), changeAreaText('fk') }} label='FK' backgroundColor={selectedArea == 'fk' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'fk' ? COLORS.white : COLORS.black} icon={<FKIcon strokeBlack={selectedArea == 'fk' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'fk' ? COLORS.white : COLORS.brightPurple} />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { setSelectedArea('fkip'), changeAreaText('fkip') }} label='FKIP' backgroundColor={selectedArea == 'fkip' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'fkip' ? COLORS.white : COLORS.black} icon={<FKIPIcon strokeBlack={selectedArea == 'fkip' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'fkip' ? COLORS.white : COLORS.brightPurple} />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { setSelectedArea('fmipa'), changeAreaText('fmipa') }} label='FMIPA' backgroundColor={selectedArea == 'fmipa' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'fmipa' ? COLORS.white : COLORS.black} icon={<FMIPAIcon strokeBlack={selectedArea == 'fmipa' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'fmipa' ? COLORS.white : COLORS.brightPurple} />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { setSelectedArea('fp'), changeAreaText('fp') }} label='FP' backgroundColor={selectedArea == 'fp' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'fp' ? COLORS.white : COLORS.black} icon={<FPIcon strokeBlack={selectedArea == 'fp' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'fp' ? COLORS.white : COLORS.brightPurple} />} style={{ marginRight: 12 }} />
                    <GroupBox onPress={() => { setSelectedArea('ft'), changeAreaText('ft') }} label='FT' backgroundColor={selectedArea == 'ft' ? COLORS.mainPurple : COLORS.white} labelColor={selectedArea == 'ft' ? COLORS.white : COLORS.black} icon={<FTIcon strokeBlack={selectedArea == 'ft' ? COLORS.white : COLORS.black} strokePurple={selectedArea == 'ft' ? COLORS.white : COLORS.brightPurple} />} />
                </View>
            </ScrollView>

            <View style={{ marginHorizontal: 16, marginTop: 24, marginBottom: 12 }}>
                <Text style={styles.areaText}>{areaText}</Text>
            </View>

            <View>
                <LocationBox onPress={() => { navigation.navigate('Location') }} imageUrl={imageUrl} label='Gedung Rektorat' subLabel='Area Universitas' />
                <LocationBox onPress={() => { }} imageUrl={imageUrl} label='Masjid Al-Wasi&apos;i' subLabel='Area Universitas' />
            </View>

            {/* To make sure the content still visible (24px) on top of bottom bar navigation */}
            <View style={{ height: 24, width: '100%' }}></View>
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
    areaText: {
        color: COLORS.mainPurple,
        fontFamily: 'Rubik-Medium',
        fontSize: 20,
    },
});
