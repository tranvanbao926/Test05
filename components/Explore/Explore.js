import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
const heightCollection = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width

const heightOfViewContainProduct = heightCollection * 0.825;
// const newHeight= (heightOfViewContainProduct - 20) / 2;
// const newWidth= newHeight/1200*960;
const widthOfEchFieldView = (widthScreen - 40) / 2
const heightOfEachFieldView = (heightOfViewContainProduct - 10) / 2;
const heightOfEachField = (heightOfViewContainProduct - 20) / 2;
const heighImage = (heightOfEachField - 40)

const widthImage = widthOfEchFieldView


export default class Explore extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <ScrollView style={styles.wrapper}>
                <Text style={styles.textHeader}>
                    Experiences in the spotlight
                </Text>
                <View style={{ height: heightOfViewContainProduct }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.ViewOfImageAndText}
                            onPress={() => {
                                navigate('Login')
                            }}>
                            <Image style={{ width: widthImage, height: heighImage }}
                                source={require('../../images/102.jpeg')}
                            ></Image>
                            <Text style={styles.text1}>Abu Dhabi</Text>
                            <Text style={styles.text2}>Dubai</Text>
                        </TouchableOpacity>
                        <View style={styles.ViewOfImageAndText}>
                            <Image style={{ width: widthImage, height: heighImage }}
                                source={require('../../images/104.jpeg')}
                            ></Image>
                            <Text style={styles.text1}>Turkey</Text>
                            <Text style={styles.text2}>Turkey</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.ViewOfImageAndText}>
                            <Image style={{ width: widthImage, height: heighImage }}
                                source={require('../../images/54.jpeg')}
                            ></Image>
                            <Text style={styles.text1}>fdsfdsf</Text>
                            <Text style={styles.text2}>dfaf</Text>
                        </View>
                        <View style={styles.ViewOfImageAndText}>
                            <Image style={{ width: widthImage, height: heighImage }}
                                source={require('../../images/56.jpeg')}
                            ></Image>
                            <Text style={styles.text1}>dfdaf</Text>
                            <Text style={styles.text2}>dfdfdf</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )

    }
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30,
        backgroundColor: '#f5f5f5',
        height: heightCollection * 0.93,
        shadowColor: '#a9a9a9',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        elevation: 3
    },
    textHeader: {
        fontSize: 25, fontWeight: 'bold', color: '#4b0082', padding: 10
    },
    text1: {
        marginLeft: 10, fontSize: 16, color: '#d3d3d3', marginTop: 0
    },
    text2: {
        marginLeft: 10, fontSize: 14, color: '#800000', marginTop: 0
    },
    ViewOfImageAndText: {
        elevation: 3, margin: 5,
        width: widthOfEchFieldView,
        height: heightOfEachFieldView,
        backgroundColor: '#b0c4de',
    }

})