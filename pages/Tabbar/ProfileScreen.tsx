import { View, Button, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { Component } from 'react'
import Icon from "react-native-vector-icons/Ionicons";

class ProfileScreen extends Component {
    // state = {  } 

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#007C80' }}>
                    <Text>Profile Screen</Text>
                    <Icon name={'person'} size={20} color={'#000'} />
                </View>
            </SafeAreaView>
        );
    }
}

export default ProfileScreen;