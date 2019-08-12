import React, { Component } from "react"
import { View, Text, TextInput, Image, StyleSheet, Dimensions } from "react-native"

import ic_menu from "../../icons/ic_menu.png"
import ic_email from "../../icons/ic_email.png"
import { TouchableOpacity } from "react-native-gesture-handler";

const height = Dimensions.get('window').height

export default class Header extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <View>
                <View style={{
                    height: 30,
                    backgroundColor: '#007BA4',
                }}></View>
                <View style={styles.wrapper}>
                    <View style={styles.row1}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.toggleDrawer()
                            }}>
                            <Image source={ic_menu} style={styles.iconStyle}></Image>
                        </TouchableOpacity>

                        <Image source={ic_email} style={styles.iconStyle}></Image>
                    </View>

                    <View>
                        <Text style={styles.titleStyle}>What are you looking for?</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="search"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: height / 6,
        backgroundColor: '#007BA4',
        padding: 10,
        justifyContent: 'space-around',
        paddingBottom: 1
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },
    iconStyle: { width: 25, height: 25, tintColor: 'white' }
});
