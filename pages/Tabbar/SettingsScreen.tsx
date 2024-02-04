import { View, Button, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { Component } from 'react'
import Icon from "react-native-vector-icons/Ionicons";

class SettingsScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#387C44' }}>
                    <Text>Settings Screen</Text>
                    <Icon name={'settings'} size={20} color={'#000'} />
                </View>
            </SafeAreaView>
        );
    }
}

export default SettingsScreen;