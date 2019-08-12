import React, { Component } from "react"
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native"
import camera from "../../images/camera.png"

export default class Menu extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.btn1} onPress={() => {
                    navigate("Dashboard");
                }}>
                    <Image source={camera} style={styles.icon1} />
                    <Text style={styles.txt1}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1}>
                    <Image source={camera} style={styles.icon1} />
                    <Text style={styles.txt1}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1}>
                    <Image source={camera} style={styles.icon1} />
                    <Text style={styles.txt1}>Home</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        paddingTop: 50
    },
    icon1: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt1: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },
    btn1: {
        height: 50,
        backgroundColor: "#2ddd",
        borderRadius: 5,
        marginBottom: 5,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: 'row'
    },
});