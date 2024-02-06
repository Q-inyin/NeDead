// import React from 'react';
import {
    Dimensions,
    View,
    StyleSheet,
    useColorScheme,
    Text,
    Image,
    ScrollView
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Swiper from 'react-native-swiper';

import AntDesign from 'react-native-vector-icons/AntDesign';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function NewApp() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <Swiper
            buttonWrapperStyle={{
                backgroundColor: 'transparent',
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                left: 0,
                flex: 1,
                paddingHorizontal: 30,
                paddingVertical: 20,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
            }}
            showsButtons={true}
            loop={true}
            paginationStyle={{
                marginRight: w * 0.7,
                marginBottom: h * 0.02,
            }}
            activeDotColor={isDarkMode ? Colors.darker : Colors.lighter}
            // dotColor={isDarkMode ? Colors.lighter : Colors.darker}
            dot={<View style={{
                backgroundColor: 'black', width: 7, height: 7, borderRadius:
                    5, marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2
            }} />}
            activeDot={<View style={{
                backgroundColor: 'white', width: 7, height: 7,
                borderRadius: 5, marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2
            }} />}
            nextButton={
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        height: 60,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 60,
                        justifyContent: 'center',
                        backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
                    }}>
                    <AntDesign
                        name="arrowright"
                        size={22}
                        color={isDarkMode ? Colors.darker : Colors.lighter}
                    />
                </View>
            }
            prevButton={
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        height: 60,
                        borderRadius: 30,
                        alignItems: 'center',
                        width: 60,
                        justifyContent: 'center',
                        backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
                        marginHorizontal: 20,
                    }}>
                    <AntDesign
                        name="arrowleft"
                        size={22}
                        color={isDarkMode ? Colors.darker : Colors.lighter}
                    />
                </View>
            }>

            <View style={styles.slide}>
                <Image source={require('../../assets/images/1.jpg')} style={styles.img} />
                <Text
                    style={[
                        styles.title,
                        { color: isDarkMode ? Colors.lighter : Colors.darker },
                    ]}>
                    React Native UI-kit
                </Text>
                <ScrollView>
                    <Text style={[
                        styles.text,
                        { color: isDarkMode ? Colors.lighter : Colors.darker },
                    ]}>
                        {/* numberOfLines={1} ellipsizeMode="tail" */}
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Text>
                </ScrollView>
            </View>
            <View style={styles.slide}>
                <Image source={require('../../assets/images/2.jpg')} style={styles.img} />
                <Text style={[
                    styles.title,
                    { color: isDarkMode ? Colors.lighter : Colors.darker },
                ]}>
                    Get Started
                </Text>
                <Text style={[
                    styles.text,
                    { color: isDarkMode ? Colors.lighter : Colors.darker },
                ]}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </Text>
            </View>
            <View style={styles.slide}>
                <Image source={require('../../assets/images/6.jpg')} style={styles.img} />
                <Text style={[
                    styles.title,
                    { color: isDarkMode ? Colors.lighter : Colors.darker },
                ]}>
                    Discover
                </Text>
                <Text style={[
                    styles.text,
                    { color: isDarkMode ? Colors.lighter : Colors.darker },
                ]}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </Text>
            </View>
            <View style={styles.slide}>
                <Image source={require('../../assets/images/7.jpg')} style={styles.img} />
                <Text style={[
                    styles.title,
                    { color: isDarkMode ? Colors.lighter : Colors.darker },
                ]}>
                    Welcome Devhub
                </Text>
                <Text style={[
                    styles.text,
                    { color: isDarkMode ? Colors.lighter : Colors.darker },
                ]}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </Text>
            </View>
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        color: "while"
    },
    slide: {
        // flex: 1,
        paddingTop: 20,
        marginHorizontal: 30,
    },
    img: {
        alignSelf: 'center',
        borderBottomRightRadius: 80,
        borderTopLeftRadius: 80,
        height: h * 0.4,
        width: w * 0.9,
    },
    title: {
        marginTop: 16,
        marginHorizontal: 10,
        fontSize: 30,
    },
    text: {
        color: '#111',
        marginTop: 10,
        fontSize: 16,
        lineHeight: 20,
        marginLeft: 10,
    },
});
