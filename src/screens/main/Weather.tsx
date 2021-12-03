import React, { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HumidityIcon from '../../../assets/svg/weather/HumidityIcon';
import WindIcon from '../../../assets/svg/weather/WindIcon';
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color';

export default function Weather(): ReactElement {
    return (
        <Base>
            <View style={styles.headerContainer}>
                <Text style={styles.bigText}>Cuaca</Text>
            </View>
            <View style={styles.weatherStatusContainer}>
                <Text style={styles.weatherDate}>Jumat 03/07</Text>
                <Text style={styles.weatherLocation}>Bandar Lampung</Text>
                <View style={styles.weatherDataContainer}>
                    <View style={[styles.weatherData, { marginRight: 16 }]}>
                        <WindIcon />
                        <Text style={styles.weatherDataText}>0.3 m/s</Text>
                    </View>
                    <View style={styles.weatherData}>
                        <HumidityIcon />
                        <Text style={styles.weatherDataText}>90%</Text>
                    </View>
                </View>
            </View>
        </Base>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 24,
        marginHorizontal: 16,
    },
    bigText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Bold',
        fontSize: 36
    },
    weatherStatusContainer: {
        marginHorizontal: 16,
        marginTop: 16
    },
    weatherDate: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: COLORS.textGrey
    },
    weatherLocation: {
        marginTop: 4,
        fontFamily: 'Rubik-Bold',
        fontSize: 28,
        color: COLORS.mainPurple
    },
    weatherDataContainer: {
        marginTop: 4,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    weatherData: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    weatherDataText: {
        marginLeft: 4,
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        color: COLORS.black
    }
});