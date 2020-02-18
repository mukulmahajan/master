/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Setting a timer',
]);

AppRegistry.registerComponent('manager', () => App);
