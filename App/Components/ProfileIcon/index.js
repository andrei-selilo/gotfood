import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
// import { Circle10 } from '../StyledComponents/viewStyles'
import styles from './styles';
import Colors from '../../Themes/Colors'

const Input = ({ style, imgSource, ...props }) => (
  <TouchableOpacity {...props}>
    <View style={[styles.container, styles.circle, style]}>
      <Image source={imgSource}/>
    </View>
  </TouchableOpacity>
);

export default Input;