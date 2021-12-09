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
                        {label == 'Home' ? <HomeIcon key={state.index} strokeColor={state.index == 0 ? COLORS.mainPurple : COLORS.inactivePurple} /> : label == 'Explore' ? <ExploreIcon key={state.index} strokeColor={state.index == 1 ? COLORS.mainPurple : COLORS.inactivePurple} /> : label == 'Weather' ? <WeatherIcon key={state.index} strokeColor={state.index == 2 ? COLORS.mainPurple : COLORS.inactivePurple} /> : <MoreIcon key={state.index} strokeColor={state.index == 3 ? COLORS.mainPurple : COLORS.inactivePurple} />}
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBarContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: COLORS.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 36,
        paddingBottom: 48,
        paddingTop: 32,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
