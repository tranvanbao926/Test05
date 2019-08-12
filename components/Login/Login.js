import React, { Component } from "react"
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, StyleSheet } from "react-native"
import ic_back from "../../icons/ic_back.png"
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const heightAll = height - height * 0.30
export default class Login extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.goBack()
                }}>
                    <Image style={{ width: heightAll * 1 / 12, height: heightAll * 1 / 12, marginTop: 30 }}
                        source={ic_back}
                    ></Image>
                </TouchableOpacity>

                <View style={{ paddingTop: 10, marginLeft: 20 }}>
                    <Text style={{ fontSize: 40 }}>
                        Hi,
                    </Text>
                    <Text style={{ fontSize: 40 }}>
                        Wellcom back!
                    </Text>
                </View>

                <View style={{ marginTop: 50 }}>
                    <Text style={styles.txtInf}>Username</Text>
                    <TextInput
                        style={styles.txtInf}
                        placeholder="@fgfgdf"
                        underlineColorAndroid="transparent"
                    />
                    <Text style={styles.txt_} />
                    <Text style={styles.txtInf}>Password</Text>
                    <TextInput
                        style={styles.txtInf}
                        placeholder="dfdfs"
                        underlineColorAndroid="transparent"
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={{ color: 'red', marginRight: 10 }}>Forgot your password?</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.btnLoginStyle}
                        onPress={() => {
                            navigate('Explore')
                        }}>
                        <Text style={styles.txt1}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1, padding: 30 }}>
                    <Text>Don't have an account? Sign up</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 50
    },
    btnLoginStyle: {
        height: 50,
        backgroundColor: "red",
        borderRadius: 5,
        width: width - 40,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        borderWidth: 1
    },
    txtInf: {
        color: "#015C7B",
        fontFamily: "Avenir",
        fontSize: 20,
        marginTop: 10,
        marginLeft: 20
    },
    txt_: {
        height: 0.3,
        borderWidth: 0.3,
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        borderColor: "#a9a9a9"
    },
    txt1: {
        color: "#fff",
        fontFamily: "Avenir",
        fontSize: 20
    },
})