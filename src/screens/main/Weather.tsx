import React, { ReactElement, useEffect, useState } from 'react'
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
import Load from '../../component/utils/Load';
import { COLORS } from '../../constant/Color';
import { initializeWeather } from '../../constant/InitWeather';
import { capitalizeFirstLetter } from '../../function/CapitalizeFirstLetter';
import { getCurrentDate } from '../../function/GetCurrentDate';
const axios = require('axios').default;
import { WEATHER_API_KEY } from "@env"

const cityId = '1624917' // ID of bandar lampung city
const weatherApiEndpoint = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&lang=id&appid=${WEATHER_API_KEY}`

export default function Weather(): ReactElement {
    let screenWidth = Dimensions.get("window").width;
    const [weatherData, setWeatherData]: any = useState(initializeWeather)
    const [isLoading, setIsLoading] = useState(false)
    const [weatherIcon, setWeatherIcon] = useState(<CloudIcon />)
    const [date, setDate] = useState({ text: 'Kamis', day: '01', month: '01', year: 1970 })
    const [weatherDetail, setWeatherDetail] = useState('')

    async function getWeather() {
        setIsLoading(true)
        await axios.get(weatherApiEndpoint)
            .then(async (currentWeather: any) => {
                const weatherCode = currentWeather.data.weather[0].icon
                if (weatherCode == '01d' || weatherCode == '01n') { // Clear sky
                    setWeatherIcon(<SunnyIcon />)
                    setWeatherDetail('Kayaknya bakal panas nih! \nJangan sampai dehidrasi ya.')
                } else if (weatherCode == '02d' || weatherCode == '02n') { // Few clouds
                    setWeatherIcon(<SunnyCloudIcon />)
                    setWeatherDetail('Nah cuacanya enak nih, \nmain di luar yuk!')
                } else if (weatherCode == '03d' || weatherCode == '03n') { // Single cloud
                    setWeatherIcon(<CloudIcon />)
                    setWeatherDetail('Ada awan-awan yang \nbisa nemenin kegiatan kamu nih!')
                } else if (weatherCode == '04d' || weatherCode == '04n') { // Scattered clouds
                    setWeatherIcon(<ScatteredCloudsIcon />)
                    setWeatherDetail('Nah, cocok nih. \nCuacanya pas buat santai sejenak.')
                } else if (weatherCode == '09d' || weatherCode == '09n') { // Shower rain
                    setWeatherIcon(<RainIcon />)
                    setWeatherDetail('Hmmm... Hujan nih. \nJangan lupa sedia payung ya!')
                } else if (weatherCode == '10d' || weatherCode == '10n') { // Sunny Rain
                    setWeatherIcon(<SunnyRainIcon />)
                    setWeatherDetail('Kayaknya mau hujan, nih. \nJaga kesahatan selalu ya.')
                } else if (weatherCode == '11d' || weatherCode == '11n') { // Thunderstorm
                    setWeatherIcon(<ThunderstormIcon />)
                    setWeatherDetail('Hujan deres!!! \nMari santai sejenak!')
                } else if (weatherCode == '13d' || weatherCode == '13n') { // Snow
                    setWeatherIcon(<SnowIcon />)
                    setWeatherDetail('Dingin bangettt... \nAwas demam ya!')
                } else if (weatherCode == '50d' || weatherCode == '50n') { // Mist
                    setWeatherIcon(<MistIcon />)
                    setWeatherDetail('Berkabut nih! \nYang mau keluar hati-hati ya!')
                } else {
                    console.log('Unhandled weather code: ', weatherCode);
                    setWeatherIcon(<CloudIcon />)
                }
                setWeatherData(currentWeather.data)
                setIsLoading(false)
            })
            .catch((err: any) => console.log(err))
    }


    useEffect(() => {
        setIsLoading(true)
        getWeather()
        const date: any = getCurrentDate()
        setDate(date)
    }, [])

    if (isLoading) {
        return <Load text='Tunggu bentar...' />
    } else {
        return (
            <Base>
                <View style={[styles.mainContainer]}>
                    <View style={styles.weatherStatusContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.bigText}>Cuaca</Text>
                        </View>
                        <Text style={styles.weatherDate}>{date.text} {date.day}/{date.month}</Text>
                        <Text style={styles.weatherLocation}>{weatherData.name == 'Bandarlampung' ? 'Bandar Lampung' : weatherData.name}</Text>
                        <View style={styles.weatherDataContainer}>
                            <View style={[styles.weatherData, { marginRight: 16 }]}>
                                <WindIcon />
                                <Text style={styles.weatherDataText}>{weatherData.wind.speed} m/s</Text>
                            </View>
                            <View style={styles.weatherData}>
                                <HumidityIcon />
                                <Text style={styles.weatherDataText}>{weatherData.main.humidity}%</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '100%', marginLeft: screenWidth / 3 }}>
                        {weatherIcon}
                    </View>

                    <View style={styles.weatherDetailsContainer}>
                        <View style={{ width: 84, borderBottomWidth: 7, borderBottomColor: COLORS.mainPurple }} />
                        <Text style={styles.temperatureText}>{Math.round(weatherData.main.temp)}&#xb0;C</Text>
                        <Text style={styles.weatherLocation}>{capitalizeFirstLetter(weatherData.weather[0].description)}</Text>
                        <Text style={[styles.weatherDate, { marginTop: 6 }]}>{weatherDetail}</Text>
                    </View>
                </View>

                {/* To make sure the content still visible (24px) on top of bottom bar navigation */}
                {/* <View style={{ height: 24, width: '100%' }}></View> */}
            </Base>
        )
    }
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