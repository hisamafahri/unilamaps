import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ChevronIcon from '../../../assets/svg/helper/ChevronIcon'
import LocationIcon from '../../../assets/svg/helper/search/LocationIcon'
import { COLORS } from '../../constant/Color'

export default function SearchResultBox({ onPress = () => { }, location = 'Nama Lokasi', area = 'Area Lokasi' }: any): ReactElement {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={COLORS.inactivePurple} style={{ marginHorizontal: 16, borderRadius: 16, marginBottom: 12 }}>
            <View style={styles.searchResultContainer}>
                <View style={styles.searchResultLead}>
                    <LocationIcon />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.locationName}>{location}</Text>
                        <Text style={styles.areaName}>{area}</Text>
                    </View>
                </View>
                <ChevronIcon />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    searchResultContainer: {
        borderRadius: 16,
        backgroundColor: COLORS.white,
        paddingHorizontal: 16,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchResultLead: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    locationName: {
        color: COLORS.black,
        fontFamily: 'Rubik-Medium',
        fontSize: 16
    },
    areaName: {
        color: COLORS.textGrey,
        fontSize: 14
    }
});
