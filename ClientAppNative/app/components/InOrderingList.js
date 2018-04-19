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
    ScrollView
} from 'react-native';
import {Container, List, ListItem, Text, View} from 'native-base';
import Dimensions from 'Dimensions';

const {width, height} = Dimensions.get('window');
const contentHeight =  height - 136;

export default class InOrderingList extends Component<Props> {

    render() {
        return (
            <Container>
                <View style={{height: 52}}>
                    <Text style={{padding: 10, fontSize: 20}}>총 20개</Text>
                </View>
                <ScrollView>
                    <List>
                        <ListItem itemHeader first>
                            <Text>COMEDY</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Hangover</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Horrible Bosses</Text>
                        </ListItem>
                        <ListItem last>
                            <Text>Conjuring</Text>
                        </ListItem>
                        <ListItem itemHeader>
                            <Text>ACTION</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Terminator Genesis</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Hangover</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Horrible Bosses</Text>
                        </ListItem>
                        <ListItem last>
                            <Text>Conjuring</Text>
                        </ListItem>
                        <ListItem itemHeader>
                            <Text>ACTION</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Terminator Genesis</Text>
                        </ListItem>
                    </List>
                </ScrollView>
            </Container>
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
