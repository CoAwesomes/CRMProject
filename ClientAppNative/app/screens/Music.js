/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';
import {Text, View} from "native-base";
import CafeMenu from "../components/CafeMenu";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {width, height} = Dimensions.get('window');
const contentHeight =  height - 136 - 52;

const MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
type Props = {};
export default class CafePos extends Component<Props> {
    render() {
        let movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
                <CafeMenu contentHeight={contentHeight}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
});
