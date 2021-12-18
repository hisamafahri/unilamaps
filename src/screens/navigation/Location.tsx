import React, { ReactElement, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import ViewMoreText from 'react-native-view-more-text'
import DistanceIcon from '../../../assets/svg/helper/DistanceIcon'
import DurationIcon from '../../../assets/svg/helper/DurationIcon'
import ImageView from "react-native-image-viewing";
import CircleBackButton from '../../component/navigation/CircleBackButton'
import { COLORS } from '../../constant/Color'

// const imageUrl = 'https://cdn.wallpapersafari.com/37/51/hPGkYK.jpg'
// const imageUrl = 'https://i.imgur.com/tjwjMC8.png'

export default function Location({ navigation }: any): ReactElement {
    const topHeight = Platform.OS == 'ios' ? (StatusBar.currentHeight as any + 36) : StatusBar.currentHeight
    const [imageModalVisible, setImageModalVisible] = useState(false);
    const [statusBarColor, setstatusBarColor] = useState('transparent')
    const images = [
        {
            uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
        },
        {
            uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
        },
        {
            uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
        },
    ]
    function renderViewMore(onPress: any) {
        return (
            <Text onPress={onPress} style={styles.locationDetailTriggerText}>Baca selengkapnya...</Text>
        )
    }
    function renderViewLess(onPress: any) {
        return (
            <Text onPress={onPress} style={styles.locationDetailTriggerText}>Lebih sedikit...</Text>
        )
    }
    return (
        <ScrollView style={{ backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor={imageModalVisible ? '#000000' : 'transparent'} />
            <ImageView
                images={images}
                imageIndex={0}
                visible={imageModalVisible}
                onRequestClose={() => setImageModalVisible(false)}
            />
            <View style={[styles.headerContainer, { marginTop: topHeight }]}>
                <CircleBackButton onPress={() => { navigation.goBack() }} />
            </View>
            <View style={styles.imageContainer}>
                <TouchableWithoutFeedback onPress={() => setImageModalVisible(true)}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: images[0].uri,
                        }}
                    />
                </TouchableWithoutFeedback>
            </View>

            <View style={styles.locationContainer}>
                <Text style={styles.locationName}>Gedung Rektorat</Text>
                <Text style={styles.locationArea}>Area Universitas Lampung</Text>
                <View style={styles.distanceDataContainer}>
                    <View style={styles.distanceData}>
                        <DistanceIcon />
                        <Text style={styles.distanceDataText}>2 km</Text>
                    </View>
                    <View style={styles.distanceData}>
                        <DurationIcon />
                        <Text style={styles.distanceDataText}>1j 5m</Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginTop: 24, width: '25%', borderBottomWidth: 2, borderBottomColor: COLORS.mainPurple }} />

                <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                    textStyle={{
                        marginTop: 24,
                        color: COLORS.textGrey,
                        fontFamily: 'Rubik-Light',
                        fontSize: 16,
                    }}>
                    <Text>
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos. Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                    </Text>
                </ViewMoreText>

                <TouchableHighlight underlayColor={COLORS.mainPurple} onPress={() => { }} style={{ borderRadius: 100, marginTop: 36, marginBottom: 36 }}>
                    <View style={styles.getDirectionContainer}>
                        <Text style={styles.getDirectionText}>PETUNJUK JALAN</Text>
                    </View>
                </TouchableHighlight>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        zIndex: 10,
        paddingVertical: 4,
        marginHorizontal: 16,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    imageContainer: {
        height: 360,
        width: '100%'
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
    },
    locationContainer: {
        marginTop: -16,
        height: '100%',
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingTop: 32,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    locationName: {
        fontFamily: 'Rubik-Bold',
        fontSize: 24,
        color: COLORS.black
    },
    locationArea: {
        marginTop: 8,
        fontFamily: 'Rubik-Light',
        fontSize: 16,
        color: COLORS.textGrey
    },
    distanceDataContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    distanceData: {
        marginHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    distanceDataText: {
        marginLeft: 6,
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: COLORS.black
    },
    locationDetailTriggerText: {
        marginTop: 6,
        color: COLORS.mainPurple,
        fontFamily: 'Rubik-Medium',
        fontSize: 16,
    },
    getDirectionContainer: {
        backgroundColor: COLORS.mainGreen,
        borderRadius: 100,
        paddingVertical: 20
    },
    getDirectionText: {
        textAlign: 'center',
        color: COLORS.white,
        fontFamily: 'Rubik-Medium',
        fontSize: 16,
    }
});

