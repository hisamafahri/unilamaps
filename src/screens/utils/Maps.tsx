import React, { ReactElement } from 'react'
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Base from '../../component/container/Base';

export default function Maps({ }: any): ReactElement {
    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: -5.367083911703139,
                longitude: 105.24312463009939,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    )
}
