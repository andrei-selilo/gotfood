import * as React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import Colors from '../../Themes/Colors'

const Input = ({
  children, loading, header, style, placeholder, 
  backgroundColor = Colors.snow, secureTextEntry = false, onChangeText
}) => (
  <View style={[styles.rootContainer, { backgroundColor }, style]}>
    <TextInput style={styles.container} placeholder={placeholder} secureTextEntry={secureTextEntry} onChangeText={onChangeText}/>
  </View>
);

export default Input;