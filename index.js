/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
// import Login from './components/Login/Login';
// import ProductList from './components/listProducts/ProductList';
import Main from './components/Main.js';

AppRegistry.registerComponent(appName, () => Main);
