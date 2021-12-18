import React, { ReactElement } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color'

export default function Search({ navigation }: any): ReactElement {
    return (
        <Base>
            <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                <View style={styles.headerContainer}>
                    <ArrowIcon />
                    <Text style={styles.bigText}>Cari</Text>
                </View>
            </TouchableWithoutFeedback>
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
});

