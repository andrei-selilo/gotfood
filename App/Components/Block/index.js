import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Colors from '../../Themes/Colors'

const Block = ({
  children, loading, header, backgroundColor = Colors.snow, style
}) => (
  <View style={[styles.rootContainer, style, { backgroundColor }]}>
    <View style={styles.container}>
      {children}
    </View>
  </View>
);

export default Block;