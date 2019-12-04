import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    _doRegister() {
        this.props.navigation.navigate('RegisterScreen')
    };

    _doLogin() {
        this.props.navigation.replace('MainScreen')
    };

    render() {
        return (
            <View style={styles.cotainer}>
                <View style={styles.formArea}>
                    <TextInput style={styles.textForm} placeholder='ID' />
                    <TextInput secureTextEntry={true} autoCapitalize={"none"} style={styles.textForm} placeholder='Password' />
                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={ styles.buttonStyle } onPress={this._doRegister.bind(this)}>
                        <Text style={{color: '#fff', fontSize: 20}}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.buttonStyle } onPress={this._doLogin.bind(this)}>
                        <Text style={{color: '#fff', fontSize: 20}}>Login</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        justifyContent: 'center'
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%')
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },
    buttonArea: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: hp('5%')
    },
    buttonStyle: {
        backgroundColor :'#b18cf4', 
        width: '30%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})
