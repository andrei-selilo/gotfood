import { StackNavigator } from 'react-navigation'
import Screens from '../Themes/Screens'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignupScreen from '../Containers/SignupScreen'
import BaseScreen from '../Containers/BaseScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignupScreen: { screen: SignupScreen },
  BaseScreen: { screen: BaseScreen },
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: Screens.BASE_SCREEN,
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
