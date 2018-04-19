import React, {Component} from 'react';
import {FooterTab, Button, Text, Icon, Badge} from 'native-base';

export default class FooterTabsExample extends Component {
    render() {
        return (
            <FooterTab>
                <Button badge vertical>
                    <Badge><Text>2</Text></Badge>
                    <Icon name="apps" />
                    <Text>Apps</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera" />
                    <Text>Camera</Text>
                </Button>
                <Button active badge vertical>
                    <Badge ><Text>51</Text></Badge>
                    <Icon active name="navigate" />
                    <Text>Navigate</Text>
                </Button>
                <Button vertical>
                    <Icon name="person" />
                    <Text>Contact</Text>
                </Button>
            </FooterTab>
        );
    }
}