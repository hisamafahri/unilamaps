import React, { ReactElement, useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ArrowIcon from '../../../assets/svg/helper/ArrowIcon'
import Base from '../../component/container/Base'
import { COLORS } from '../../constant/Color'
import Accordion from 'react-native-collapsible/Accordion';
import ChevronIcon from '../../../assets/svg/helper/ChevronIcon'

const sections = [
    {
        title: 'Apakah Unila Maps Open-Source?',
        content: 'Iya!!! Mampir aja ke remote codebase-nya di https://github.com/hisamafahri/unilamaps',
    },
    {
        title: 'Kenapa Unila Maps dibuat?',
        content: 'Pengen aja.',
    },
    {
        title: 'Apakah Unila Maps sudah tersedia di platform iOS?',
        content: 'Saat ini belum. Namun akan segera hadir.'
    },
    {
        title: 'Apakah pihak Unila Maps memiliki afiliasi secara langsung dengan pihak kampus Universitas Lampung?',
        content: 'Tidak. Aplikasi Unila Maps merupakan karya independen. Aplikasi ini juga bukan merupakan tugas mata kuliah tertentu. \n\nUnila Maps murni merupakan projek yang codebase-nya di-open source-kan ke publik, dan dari proses inisiasi projek hingga pengembangan saat ini tidak memiliki afiliasi secara langsung dengan pihak Universitas.'
    },
    {
        title: 'Kenapa ada donasi untuk Unila Maps?',
        content: 'Pengembang berkomitmen agar Unila Maps dapat senantiasa gratis dan bebas dari iklan. \n\nOleh karena itu, pengembang berinisiatif untuk membuka donasi agar dapat terus mempertahankan komitmen tersebut.'
    },
    {
        title: 'Saya memiliki saran, kritik, dan pertanyaan, bagaimana saya bisa menghubungi pengembang aplikasi?',
        content: 'Silahkan kunjungi bagian "Kontak".'
    }
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

    const renderContent = (section: any, isActive: any) => {
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
            <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                <View style={styles.headerContainer}>
                    <ArrowIcon />
                    <Text style={styles.bigText}>FAQ</Text>
                </View>
            </TouchableWithoutFeedback>
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
                containerStyle={{ marginHorizontal: 16 }}
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


