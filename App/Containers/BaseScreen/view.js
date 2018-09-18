//import PropTypes from 'prop-types';
import React from 'react';
import { View, ScrollView, Text, TextInput, Image } from 'react-native';
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../Themes'
import { BaseView, RoundedButton, FullButton, DrawerButton, Block, FullInput, ProfileIcon, HorizontalList, SearchBar } from '../../Components'
import { HomeScreen, ProfileScreen, CartScreen } from './Screens'
import Screens from '../../Themes/Screens'
import styles from './styles'

const BaseScreen = ({ screenContent, setScreenContent, ...props }) => (
    <BaseView 
      backgroundColor={Colors.cloud} 
      header={true} footerMenu={true}
      screenContent={screenContent} setScreenContent={setScreenContent}
    >
    {
      (() => {
        switch(screenContent){
          case Screens.HOME_SCREEN:
            return (<HomeScreen />)
          case Screens.PROFILE_SCREEN:
            return (<ProfileScreen />)
          case Screens.CART_SCREEN:
            return (<CartScreen />)
          default: 
            return 
        }
      })()
    }
    </BaseView>
);

export default BaseScreen