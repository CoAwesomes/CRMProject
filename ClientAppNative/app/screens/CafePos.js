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
} from 'react-native';
import {Container, Content, Header, Tab, Tabs, Text, View} from "native-base";
import {Col, Grid, Row} from "react-native-easy-grid";
import Setting from "./Setting";
import Music from "./Music";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
type Props = {};

export default class CafePos extends Component<Props> {
    render() {
        const contentHeight = this.props.contentHeight;
        return (

            <Container style={styles.container}>
                <Content>
                    <Grid>
                        <Tabs initialPage={0}>
                            <Tab
                                heading="Tab1">
                                <Music />
                            </Tab>
                            <Tab heading="Tab2">
                                <Music />
                            </Tab>
                            <Tab heading="Tab3">
                                <Setting />
                            </Tab>
                            <Tab heading="Tab4">
                                <Setting />
                            </Tab>
                            <Tab heading="Tab5">
                                <Setting />
                            </Tab>
                            <Tab heading="Tab6">
                                <Setting />
                            </Tab>
                        </Tabs>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
});