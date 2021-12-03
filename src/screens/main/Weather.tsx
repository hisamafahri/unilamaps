import React, { ReactElement } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import CloudIcon from '../../../assets/svg/weather/background/CloudIcon';
import MistIcon from '../../../assets/svg/weather/background/MistIcon';
import RainIcon from '../../../assets/svg/weather/background/RainIcon';
import ScatteredCloudsIcon from '../../../assets/svg/weather/background/ScatterdCloudsIcon';
import SnowIcon from '../../../assets/svg/weather/background/SnowIcon';
import SunnyCloudIcon from '../../../assets/svg/weather/background/SunnyCloudIcon';
import SunnyIcon from '../../../assets/svg/weather/background/SunnyIcon';
import SunnyRainIcon from '../../../assets/svg/weather/background/SunnyRainIcon';
import ThunderstormIcon from '../../../assets/svg/weather/background/ThunderstormIcon';

import HumidityIcon from '../../../assets/svg/weather/HumidityIcon';
import WindIcon from '../../../assets/svg/weather/WindIcon';
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color';

export default function Weather(): ReactElement {
    let ScreenHeight = Dimensions.get("window").height;

    return (
        <Base>
            <View style={{ position: 'absolute', zIndex: -1, top: '30%', right: -84}}>
                <SunnyRainIcon />
            </View>
            {/* Screen height minus Top title (76px) and bottom nav tab (120px) + extra 64px */}
            <View style={[styles.mainContainer, { height: ScreenHeight - 184 }]}>
                <View style={styles.weatherStatusContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.bigText}>Cuaca</Text>
                    </View>
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

                <View style={styles.weatherDetailsContainer}>
                    <View style={{ width: 84, borderBottomWidth: 7, borderBottomColor: COLORS.mainPurple }} />
                    <Text style={styles.temperatureText}>24&#xb0;C</Text>
                    <Text style={styles.weatherLocation}>Hujan Ringan</Text>
                    <Text style={[styles.weatherDate, { marginTop: 6 }]}>Hmmm... Hujan nih.{'\n'}Jangan lupa sedia payung!</Text>
                </View>
            </View>
        </Base>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 12,
    },
    bigText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Bold',
        fontSize: 36
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
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
    temperatureText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Bold',
        fontSize: 84
    },
    weatherLocation: {
        marginTop: 4,
        fontFamily: 'Rubik-Bold',
        fontSize: 24,
        color: COLORS.mainPurple
    },
    weatherDataContainer: {
        marginTop: 4,
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
    },
    weatherDetailsContainer: {
        marginHorizontal: 16,
        marginBottom: 36,
    }
});