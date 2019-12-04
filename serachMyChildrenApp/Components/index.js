import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import StartScreen from './StartScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';

const AppStackNavigator = createStackNavigator(
  {
    StartScreen: StartScreen,
    RegisterScreen: RegisterScreen,
    LoginScreen: LoginScreen,
    MainScreen: MainScreen,
  }
);

export default createAppContainer(AppStackNavigator);