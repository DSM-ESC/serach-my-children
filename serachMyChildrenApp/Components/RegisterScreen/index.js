import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// NEDED
/*
 * 이름
 * 성별
 * 생년월일
 * ID
 * Password
 * Password 2
 * 정보 동의
 * 회원 가입 버튼
*/

class MyTextForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'',
            isFocused: false
        };
    }

    handleFocus = () => this.setState({isFocused: true})
    handleBlur = () => this.setState({isFocused: false})

    render() {
        let {text}=this.state;
        return (
                <View style={{flexDirection: 'column', width: '100%', justifyContent: 'flex-start', marginBottom: hp('4%')}}>
                    <Text style={{fontSize: wp('5%'), width: wp('100%'), textAlignVertical: 'center',textAlign: 'left' ,paddingBottom: wp('4%')}}> {this.props.subTitle} </Text>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <TextInput secureTextEntry={this.props.secureTextEntry} style={{...styles.textForm, 
        borderColor: this.state.isFocused? 'red' : 'black' }} 
                        onFocus= {this.handleFocus }
                        onBlur={this.handleBlur}
                        placeholder= {this.props.placehold} 
                        onTouchStart={()=> {}} />
                    </TouchableWithoutFeedback>
                </View>
        );
    }
}

export default class RegisterScreen extends Component {
    _dologin() {
        this.props.navigation.replace('LoginScreen')
    }

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: '',
            pwc: ''
        };
    }

    render() {
        return (
            <View style={styles.cotainer}> 
                <MyTextForm subTitle='아이디' placehold='아이디를 입력하세요' />
                <MyTextForm subTitle='비밀번호' placehold='비밀번호를 입력하세요' secureTextEntry={true}/>
                <MyTextForm subTitle='비밀번호 재확인' placehold='비밀번호를 재입력하세요' secureTextEntry={true}/>
                <TouchableOpacity style={{backgroundColor: '#1ac2f4', width: '70%'}}>
                    <Text> Next </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingTop: hp('10%'),
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        alignItems: 'center'
    },
    textForm: {
        borderBottomWidth: 0.5,
        width: wp('70%'),
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
})