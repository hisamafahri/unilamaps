import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { COLORS } from '../../constant/Color'
import FastImage from 'react-native-fast-image'

const notAvailableUrl = 'https://i.imgur.com/tjwjMC8.png'
// const notAvailableUrl = 'https://cdn.wallpapersafari.com/37/51/hPGkYK.jpg'

export default function LocationBox({ onPress, imageUrl = notAvailableUrl, label = 'Location Name', subLabel = 'Location Detail' }: any): ReactElement {
    const [isImageLoad, setIsImageLoad] = useState(false)
    return (
        <View style={styles.locationBoxContainer}>
            <TouchableHighlight underlayColor={COLORS.underlayWhite} onPress={onPress} style={{ borderRadius: 16 }}>
                <View style={styles.locationBox}>
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
                        <Text style={[styles.loadingText, { display: isImageLoad ? 'flex' : 'none' }]}>Memuat, tunggu bentar...</Text>
                    </View>
                    <View style={styles.locationBoxLabelContainer}>
                        <Text style={styles.locationBoxLabel}>{label}</Text>
                        <Text style={styles.locationBoxSubLabel}>{subLabel}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}


const styles = StyleSheet.create({
    locationBoxContainer: {
        marginHorizontal: 16,
        marginTop: 24
    },
    locationBox: {
        borderRadius: 16,
        backgroundColor: COLORS.white
    },
    locationBoxImageContainer: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        height: 176,
        width: '100%',
        backgroundColor: COLORS.backgroundGrey,
    },
    loadingText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        color: COLORS.textGrey,
        textAlign: 'center',
        marginTop: 88 // Half of the locationBoxImageContainer height
    },
    locationBoxImage: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        width: undefined,
        height: undefined,
        flex: 1,
    },
    locationBoxLabelContainer: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    locationBoxLabel: {
        fontSize: 16,
        fontFamily: 'Rubik-Medium',
        color: COLORS.black
    },
    locationBoxSubLabel: {
        fontFamily: 'Rubik-Regular',
        color: COLORS.textGrey
    }
})