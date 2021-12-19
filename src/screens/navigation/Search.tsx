import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import SearchIcon from '../../../assets/svg/helper/search/SearchIcon'
import SearchIllustration from '../../../assets/svg/helper/search/SearchIllustration'
import SearchNotFoundIllustration from '../../../assets/svg/helper/search/SearchNotFoundIllustration'
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color'

export default function Search({ navigation }: any): ReactElement {
    const [searchValue, setSearchValue] = useState('')
    const [isNotFound, setIsNotFound] = useState(true)
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
                    onChangeText={setSearchValue}
                    value={searchValue}
                />
                <SearchIcon />
            </View>
            <View style={styles.centerIllustration}>
                {isNotFound ? <SearchNotFoundIllustration /> : <SearchIllustration />}
                <Text style={styles.centerIllustrationText}>{isNotFound ? 'Oops... \nNggak ketemu, nih.' : 'Cari lokasi yang \ningin kamu tuju...'}</Text>
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

