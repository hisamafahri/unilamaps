import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import SearchIcon from '../../../assets/svg/helper/search/SearchIcon'
import SearchIllustration from '../../../assets/svg/helper/search/SearchIllustration'
import SearchNotFoundIllustration from '../../../assets/svg/helper/search/SearchNotFoundIllustration'
import Base from '../../component/container/Base'
import isEmpty from 'validator/lib/isEmpty';
import { COLORS } from '../../constant/Color'
import SearchResultBox from '../../component/navigation/SearchResultBox'
import CloseIcon from '../../../assets/svg/helper/search/CloseIcon'

export default function Search({ navigation }: any): ReactElement {
    const [searchValue, setSearchValue] = useState('')
    const [isFound, setIsFound] = useState(false)
    const [valueIsEmpty, setValueIsEmpty] = useState(true)

    function clearSearchBox() {
        setSearchValue('')
        setIsFound(false)
        setValueIsEmpty(true)
    }

    function searchLocation(value: any) {
        setSearchValue(value)
        if (isEmpty(value)) {
            setValueIsEmpty(true)
            setIsFound(false)
        } else {
            if (value == 'masjid') {
                console.log('value found');
                setValueIsEmpty(false)
                setIsFound(true)
            } else {
                setValueIsEmpty(false)
                setIsFound(false)
            }
        }
    }
    return (
        <Base>
            <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                <View style={styles.headerContainer}>
                    <ArrowIcon />
                    <Text style={styles.bigText}>Cari</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    placeholder="Cari di Unila Maps"
                    style={{ flex: 1 }}
                    autoFocus={true}
                    onChangeText={searchLocation}
                    value={searchValue}
                    autoCapitalize='none'
                />
                {valueIsEmpty ? <SearchIcon /> : <CloseIcon onPress={clearSearchBox} />}
            </View>
            <View style={[styles.centerIllustration, { display: isFound ? 'none' : 'flex' }]}>
                {valueIsEmpty ? <SearchIllustration /> : <SearchNotFoundIllustration />}
                <Text style={styles.centerIllustrationText}>{valueIsEmpty ? 'Cari lokasi yang \ningin kamu tuju...' : 'Oops... \nNggak ketemu, nih.'}</Text>
            </View>
            <View style={{ display: isFound ? 'flex' : 'none' }}>
                <View style={{ width: 112, alignSelf: 'center', marginTop: 16, marginBottom: 36, borderBottomWidth: 1, borderBottomColor: COLORS.mainPurple }} />
                <SearchResultBox location="Masjid Al-Wasi'i" area='Area Universitas' />
                <SearchResultBox location="Gedung Serba Guna" area='Area Universitas' />
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
    searchBoxContainer: {
        backgroundColor: COLORS.white,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    centerIllustration: {
        marginTop: 48,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerIllustrationText: {
        color: COLORS.mainPurple,
        fontFamily: 'Rubik-Medium',
        fontSize: 20,
        textAlign: 'center'
    }
});

