import * as React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles';
import { Colors, Metrics } from '../../Themes'
import { FooterMenu } from '../../Components'

const BaseView = ({
  children, headerChildren, 
  loading, 
  header = true, footerMenu = true,
  backgroundColor = Colors.silver,
  screenContent, setScreenContent,
  ...props
}) => (
    <View style={[styles.rootContainer, { backgroundColor }]}>
      <View style={(header ? styles.header : null)}>
        {headerChildren}
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
        {children}
      </ScrollView>
      { footerMenu && <FooterMenu style={styles.footer} screenContent={screenContent} setScreenContent={setScreenContent}/> }
    </View>
  );

export default BaseView;