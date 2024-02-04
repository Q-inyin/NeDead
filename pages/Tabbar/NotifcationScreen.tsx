import { View, Button, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { Component } from 'react'
import Icon from "react-native-vector-icons/Ionicons";

class NotifcationScreen extends Component {
    // state = {  } 

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#B666D2' }}>
                    <Text>Notifcation Screen</Text>
                    <Icon name={'notifications'} size={20} color={'#000'} />
                </View>
            </SafeAreaView>
        );
    }
}

export default NotifcationScreen;