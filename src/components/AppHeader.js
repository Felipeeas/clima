import React, {Component} from 'react';
import { Platform, StyleSheet, TouchableHighlight  } from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


class AppHeader extends Component {


    render() {
        
        return (
            <Header style={styles.container}>
                <Body style={styles.title}>
                </Body>
          </Header>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    }
})


export default AppHeader