import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Colors from '../../Themes/Colors'

const CardBlock = ({
  children, loading, header, style,
  title, code, currency, type,
  ...props
}) => (
  <View style={[styles.rootContainer, style]}>
    <View style={styles.container}>
      <View style={styles.currencyContainer}>
        <Text style={styles.currencyText}>{currency}</Text>
      </View>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>{code}</Text>
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.dateBlock} /><View style={styles.dateBlock}/>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>{type}</Text>
      </View>
    </View>
  </View>
)

export default CardBlock