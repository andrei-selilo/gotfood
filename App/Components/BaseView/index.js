import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Colors, Metrics } from '../../Themes'

const BaseView = ({
  children, loading, isNextButton, header, 
  onBackPress, nextLabel = "Next", backLabel = "Back", onNextButtonPress,
  backgroundColor = Colors.silver
}) => (
  <View style={[styles.rootContainer, { backgroundColor }]}>
    <View style={styles.header}></View>
    <View style={styles.container}>
      {children}
    </View>
  </View>
);

export default BaseView;