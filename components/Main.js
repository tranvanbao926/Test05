import React, { Component, PureComponent } from 'react'
import { View, Text, Dimensions, SafeAreaView, ScrollView, Image, StyleSheet} from 'react-native'
import {
    createAppContainer,
    createDrawerNavigator,
    createMaterialTopTabNavigator,
    createStackNavigator, DrawerItems, DrawerView, createBottomTabNavigator
} from 'react-navigation'
import Header from './Header/Header'
import Explore from './Explore/Explore'
import Login from './Login/Login'
import Menu from './Menu/Menu'

const iconHome = require('../icons/home.png')

export default class Main extends Component {
    render() {
        return (
            <AppContainer></AppContainer>
        );
    }
}

class Screen1 extends Component {
    render() {
        return (
            <Text>dfhaksjfhk</Text>
        );
    }
}
class Screen2 extends Component {
    render() {
        return (
            <Text>dfhaksjfhk</Text>
        );
    }
}
class Screen3 extends Component {
    render() {
        return (
            <Text>dfhaksjfhk</Text>
        );
    }
}

const Width = Dimensions.get('window').width

const BottomNavigation = createBottomTabNavigator(
    {
        'Explore': Explore,
        'MyTrips': Screen1,
        'Favourite': Screen2,
        'Profile': Screen3
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconSource;
                switch (routeName) {
                    case 'Explore':
                        iconSource = iconHome;
                        break;
                    case 'MyTrips':
                        iconSource = iconHome;
                        break;
                    case 'Favourite':
                        iconSource = iconHome;
                        break;
                    case 'Profile':
                        iconSource = iconHome;
                        break;
                    default:
                        iconSource = iconHome;
                }
                return (
                    <View style={styles.tabBarItemContainer}>
                        <Image
                            resizeMode="contain"
                            source={iconSource}
                            style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
                        />
                    </View>
                );
            },
        }),
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            showLabel: true,
            style: {
                backgroundColor: 'white',
                borderTopWidth: 0.5,
                borderTopColor: '#d6d6d6',
            },
            labelStyle: {
                color: 'grey',
            },
        },
    }
)

const AllBottomMain = createStackNavigator(
    {
        Main: BottomNavigation
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            header: () => <Header navigation={navigation} />
        }),
    }
)

const LeftHandSlider = createDrawerNavigator(
    {
        'Dashboard': AllBottomMain,

        'Login': {
            screen: Login,
            navigationOptions: {
                headerTitle: 'Login'
            }
        },
        'Explore': {
            screen: Explore,
            navigationOptions: {
                headerTitle: 'Explore'
            }
        },
        // 'Menu': {
        //     screen: Menu,
        //     navigationOptions: {
        //         headerTitle: 'Menu'
        //     }
        // },
    },
    {
        contentComponent: props => {
          const x = false;
          if (x) {
            return <Login {...props} navigation={navigation} />;
          } else {
            return <Menu {...props} />;
          }
        }
      }
)

const styles = StyleSheet.create({
    tabBarItemContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: 'white',
      paddingHorizontal: 10,
    },
    tabBarIcon: {
      width: 23,
      height: 23,
    },
    tabBarIconFocused: {
      tintColor: '#555CC4',
    }
  });

const AppContainer = createAppContainer(LeftHandSlider)