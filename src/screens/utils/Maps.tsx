import React, { ReactElement } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Base from '../../component/container/Base';
import CircleBackButton from '../../component/navigation/CircleBackButton';

export default function Maps({ navigation }: any): ReactElement {
    const topHeight = Platform.OS == 'ios' ? (StatusBar.currentHeight as any + 36) : StatusBar.currentHeight

    return (
        <>
            <StatusBar translucent backgroundColor='transparent' />
            <View style={[styles.headerContainer, { marginTop: topHeight }]}>
                <CircleBackButton onPress={() => { navigation.goBack() }} />
            </View>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: -5.367083911703139,
                    longitude: 105.24312463009939,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
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
});

