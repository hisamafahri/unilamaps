import React, { ReactElement } from 'react'
import { Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import ExploreIcon from '../../../assets/svg/navigation/ExploreIcon';
import HomeIcon from '../../../assets/svg/navigation/HomeIcon';
import MoreIcon from '../../../assets/svg/navigation/MoreIcon';
import WeatherIcon from '../../../assets/svg/navigation/WeatherIcon';
import { COLORS } from '../../constant/Color';

export default function BottomBar({ state, descriptors, navigation }: any) {
    return (
        <View style={styles.bottomBarContainer}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableWithoutFeedback onPress={onPress} key={label}>
                        {label == 'Home' ?
                            <View style={styles.mainButton}>
                                <HomeIcon onPress={onPress} key={state.index} strokeColor={state.index == 0 ? COLORS.mainPurple : COLORS.inactivePurple} />
                            </View>
                            : label == 'Explore' ?
                                <View style={styles.mainButton}>
                                    <ExploreIcon onPress={onPress} key={state.index} strokeColor={state.index == 1 ? COLORS.mainPurple : COLORS.inactivePurple} />
                                </View>
                                : label == 'Weather' ?
                                    <View style={styles.mainButton}>
                                        <WeatherIcon onPress={onPress} key={state.index} strokeColor={state.index == 2 ? COLORS.mainPurple : COLORS.inactivePurple} />
                                    </View>
                                    :
                                    <View style={styles.mainButton}>
                                        <MoreIcon onPress={onPress} key={state.index} strokeColor={state.index == 3 ? COLORS.mainPurple : COLORS.inactivePurple} />
                                    </View>
                        }
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBarContainer: {
        bottom: 0,
        backgroundColor: COLORS.brightPurple,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    mainButton: {
        backgroundColor: COLORS.white,
        paddingTop: 32,
        paddingBottom: 48,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
