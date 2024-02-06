import { View, Button, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { Component } from 'react'
import Icon from "react-native-vector-icons/Ionicons";

import NewApp from "../Writings/NewApp"
class HomeScreen extends Component {
    // state = {  } 

    render() {
        // const { navigation } = this.props;
        const styles = StyleSheet.create({
            container: {
                flex: 1,
            },
            mainContent: {
                flex: 1,
                // 重新调整导航栏占用的空间
                marginTop: 20, // 举例：如果导航栏高度为20
                // 其他样式
            },
        });

        return (
            // <SafeAreaView style={styles.container}>
            //     <View style={{backgroundColor: "red", padding: 10, marginTop: 20 + 10 }}>

            //     </View>
            //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: "green"}}>
            //             <Text>Home Screen</Text>
            //     </View>
            // </SafeAreaView>

            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#3BB9FF' }}>
                    <Text>Home Screen</Text>
                    <Icon name={'home'} size={20} color={'#000'} />
                </View> */}
                <NewApp></NewApp>
            </SafeAreaView>

            // <View>
            //     <Text>111</Text>
            //     <Button
            //         title="Go to Details... again"
            //         onPress={() =>
            //             navigation.push('Admob')
            //         }
            //     />
            // </View>
        );
    }
}

export default HomeScreen;