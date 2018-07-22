import { StackNavigator } from 'react-navigation'
import Screens from '../Themes/Screens'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignupScreen from '../Containers/SignupScreen'
import HomeScreen from '../Containers/HomeScreen'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: Screens.LOGIN_SCREEN,
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
