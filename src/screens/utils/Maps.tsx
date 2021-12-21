import React, { ReactElement, useState } from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import MapView, { Marker } from 'react-native-maps';
import MapMarker from '../../../assets/svg/helper/MapMarker';
import MapLocationCallout from '../../component/map/MapLocationCallout';
import Callout from '../../component/map/MapLocationCallout';
import CircleBackButton from '../../component/navigation/CircleBackButton';
import { COLORS } from '../../constant/Color';


export default function Maps({ navigation }: any): ReactElement {
    const topHeight = Platform.OS == 'ios' ? (StatusBar.currentHeight as any + 36) : StatusBar.currentHeight
    const [isLocationBoxVisible, setIsLocationBoxVisible] = useState(false)

    return (
        <>
            <StatusBar translucent backgroundColor='transparent' />
            <View style={[styles.headerContainer, { marginTop: topHeight }]}>
                <CircleBackButton onPress={() => { navigation.goBack() }} />
            </View>
            <View style={[styles.locationInfoBoxContainer, { display: isLocationBoxVisible ? 'flex' : 'none' }]}>
                <MapLocationCallout onPress={() => navigation.navigate('Location')} />
            </View>
            <MapView
                provider='google'
                showsCompass={false}
                style={{ flex: 1 }}
                moveOnMarkerPress={true} // TODO: Need iOS implementation
                initialRegion={{
                    latitude: -5.367083911703139,
                    longitude: 105.24312463009939,
                    latitudeDelta: 0.004, // TODO: calculate
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    key={1}
                    coordinate={{
                        latitude: -5.368199774520813,
                        longitude: 105.24252300091534
                    }}
                    onPress={() => setIsLocationBoxVisible(true)}
                >
                    <MapMarker colorCenter={COLORS.mainPurple} colorRing={isLocationBoxVisible ? '#F56792' : '#00DC80'} />
                </Marker>
            </MapView>
        </>
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
    locationInfoBoxContainer: {
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
        width: '100%',
        marginBottom: 48,
    }
});

