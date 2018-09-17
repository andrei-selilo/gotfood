import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Colors, Metrics, Fonts } from '../../Themes'
import { Block, TextButton } from '../../Components'

const FooterMenu = ({ style = {}, elements = [], ...props }) => (
  <View style={[styles.container, style]}>
    <View style={styles.menuItem}>
      <TextButton title='menu' textStyle={{fontSize: 24}}/>
    </View>
    <View style={styles.menuItem}>
      <TextButton title='profile' textStyle={{fontSize: 24}}/>
    </View>
    <View style={styles.menuItem}>
      <TextButton title='cart' textStyle={{fontSize: 24}}/>
    </View>
  </View>
);

export default FooterMenu;