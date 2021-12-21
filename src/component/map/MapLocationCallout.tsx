import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { COLORS } from '../../constant/Color'

const imageUrl = 'https://cdn.wallpapersafari.com/37/51/hPGkYK.jpg'

export default function MapLocationCallout({ onPress }: any): ReactElement {
    const [isImageLoad, setIsImageLoad] = useState(false)

    return (
        <TouchableHighlight underlayColor={COLORS.inactivePurple} onPress={onPress} style={{ marginHorizontal: 16, borderRadius: 16 }}>
            <View style={styles.locationInfoBox}>
                <View style={styles.locationBoxImageContainer}>
                    <FastImage
                        style={[styles.locationBoxImage, { display: !isImageLoad ? 'flex' : 'none' }]}
                        onLoadStart={() => setIsImageLoad(true)}
                        onLoad={() => setIsImageLoad(false)}
                        source={{
                            uri: imageUrl,
                            priority: FastImage.priority.high,
                        }}
                    />
                    <Text style={[styles.loadingText, { display: isImageLoad ? 'flex' : 'none' }]}>Memuat...</Text>
                </View>
                <View style={styles.locationDetailContainer}>
                    <Text style={styles.locationDetailName}>Masjid Al-Wasi'i</Text>
                    <Text style={styles.locaitonDetailArea}>Area Universitas</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    locationInfoBox: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 5,
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    locationBoxImageContainer: {
        borderRadius: 16,
        height: 96,
        width: 96,
        backgroundColor: COLORS.backgroundGrey,
    },
    loadingText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 12,
        color: COLORS.textGrey,
        textAlign: 'center',
        marginTop: 40
    },
    locationBoxImage: {
        borderRadius: 16,
        width: undefined,
        height: undefined,
        flex: 1,
    },
    locationDetailContainer: {
        flex: 1,
        marginLeft: 12,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    locationDetailName: {
        color: COLORS.black,
        fontFamily: 'Rubik-Medium',
        fontSize: 18
    },
    locaitonDetailArea: {
        marginTop: 2,
        color: COLORS.textGrey,
        fontFamily: 'Rubik-Light',
        fontSize: 14
    }
})