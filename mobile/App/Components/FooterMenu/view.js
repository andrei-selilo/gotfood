import * as React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'
import { Block, TextButton } from '../../Components'
import Screens from '../../Themes/Screens'
import styles from './styles'

const FooterMenu = ({ 
  style = {}, 
  onHomeClick, onProfileClick, onCartClick,
  screenContent,
  elements = [
    { title: 'home', screen: Screens.HOME_SCREEN, onClick: onHomeClick }, 
    { title: 'profile', screen: Screens.PROFILE_SCREEN, onClick: onProfileClick }, 
    { title: 'cart', screen: Screens.CART_SCREEN, onClick: onCartClick }
  ], 
  ...props 
}) => (
  <View style={[styles.container, style]}>
    {elements.map((element, index) => {
      const focus = screenContent === element.screen ? true : false
      return (
        <View key={`footerMenu-element-${index}`} style={styles.menuItem}>
          <TextButton title={element.title} textStyle={[styles.unfocusedText, {fontSize: 24}]} onPress={element.onClick} focus={focus}/>
        </View>
      )
    })}
  </View>
);

export default FooterMenu;