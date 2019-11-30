import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class StartScreen extends Component {
    _dologin(){
        this.props.navigation.replace('RegisterScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Login Page, Hello Guys! </Text>
                <TouchableOpacity style={{backgroundColor: '#b18cf4', width: 180, alignItems: "center"}} onPress={this._dologin.bind(this)}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
})
