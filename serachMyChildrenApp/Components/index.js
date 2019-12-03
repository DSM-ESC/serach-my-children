import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import StartScreen from './StartScreen';
import RegisterScreen from './RegisterScreen';

const AppStackNavigator = createStackNavigator(
  {
    StartScreen: StartScreen,
    RegisterScreen: RegisterScreen
  }
);

export default createAppContainer(AppStackNavigator);