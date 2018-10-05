import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Colors, Metrics, Fonts } from '../../Themes'

const TextButton = ({ style, textStyle, title = '', onPress, focus = false }) => (
  <TouchableOpacity style={[style]} onPress={onPress}>
    <Text style={[Fonts.style.h2, textStyle, (focus ? styles.onFocus : {})]}>{title}</Text>
  </TouchableOpacity>
);

export default TextButton;