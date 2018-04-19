import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {List, ListItem, Text, View} from "native-base";


export default class CafeMenu extends Component {
    render() {
        let height = this.props.contentHeight;

        return (
            <View>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 25,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 100,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});