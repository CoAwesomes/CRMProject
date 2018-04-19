/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import {Container, Header, Footer, Content, List, ListItem, Text, View, Root} from 'native-base';
import CafePos from './screens/CafePos';
import CustomFooter from "./components/CustomFooter";
import Dimensions from 'Dimensions';
import {Col, Grid} from "react-native-easy-grid";
import InOrderingList from "./components/InOrderingList";

const {width, height} = Dimensions.get('window');
const contentHeight = height - 136;

export default class App extends Component<Props> {

    render() {
        return (
            <Root>
                <Container>
                    <Header/>
                    <Content>
                        <Grid style={{height: contentHeight}}>
                            <Col style={{width: 400, backgroundColor: 'white'}}>
                                <InOrderingList/>
                            </Col>
                            <Col style={{backgroundColor: '#00CE9F'}}>
                                <CafePos
                                    contentHeight={contentHeight}
                                />
                            </Col>
                        </Grid>
                    </Content>
                    <Footer>
                        <CustomFooter/>
                    </Footer>
                </Container>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
