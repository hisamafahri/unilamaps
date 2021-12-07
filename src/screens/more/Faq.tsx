import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color'
import Accordion from 'react-native-collapsible/Accordion';
import ChevronIcon from '../../../assets/svg/helper/ChevronIcon'

const sections = [
    {
        title: 'Lorem',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Second',
        content: 'Lorem ipsum2...',
    },
];

export default function Faq({ navigation }: any): ReactElement {
    const [activeSections, setActiveSections] = useState([])

    const renderHeader = (section: any) => {
        return (
            <View style={styles.accordionContainer}>
                <Text style={{ flex: 1, fontFamily: 'Rubik-Medium', color: COLORS.mainPurple }}>{section.title}</Text>
                <ChevronIcon style={{ marginLeft: 12, transform: [{ rotate: '90deg' }] }} />
            </View>
        );
    };

    const renderContent = (section: any, isActive:any) => {
        return (
            <View style={styles.accordionContent}>
                <Text style={{ color: COLORS.black, fontFamily: 'Rubik-Light' }}>{section.content}</Text>
            </View>
        );
    };

    const updateSections = (activeSections: any) => {
        setActiveSections(activeSections);
    };

    return (
        <Base>
            <View style={styles.headerContainer}>
                <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                    <ArrowIcon />
                </TouchableWithoutFeedback>
                <Text style={styles.bigText}>FAQ</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}><Text style={{ fontStyle: 'italic' }}>Frequently asked questions</Text> (pertanyaan yang sering diajukan).</Text>
            </View>

            <Accordion
                sections={sections}
                activeSections={activeSections}
                renderHeader={renderHeader}
                renderContent={renderContent}
                onChange={updateSections}
                underlayColor='transparent'
                sectionContainerStyle={{ backgroundColor: COLORS.white, borderRadius: 16, marginTop: 12 }}
                containerStyle={{marginHorizontal: 16}}
            />

        </Base>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 24,
        marginHorizontal: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bigText: {
        color: COLORS.black,
        fontFamily: 'Rubik-Bold',
        fontSize: 36,
        marginLeft: 24
    },
    detailContainer: {
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 28
    },
    detailText: {
        color: COLORS.textGrey,
        fontFamily: 'Rubik-Light',
        fontSize: 16
    },
    accordionContainer: {
        borderRadius: 16,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingVertical: 20,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    accordionContent: {
        paddingHorizontal: 24,
        paddingBottom: 24
    }
});


