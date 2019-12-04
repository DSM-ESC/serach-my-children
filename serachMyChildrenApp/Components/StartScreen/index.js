import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Spinner from 'react-native-spinkit'

export default class StartScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    _dologin(){
        this.props.navigation.replace('LoginScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> 아이 안심 서비스 </Text>
                <TouchableOpacity style={{backgroundColor: '#b18cf4', width: '100%', alignItems: "center"}} onPress={this._dologin.bind(this)}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                <Spinner color={'#444444'} size={100} type={'ThreeBounce'} />
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
