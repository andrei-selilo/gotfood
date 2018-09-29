import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Colors from '../../Themes/Colors'

const CardBlock = ({
  children, loading, header, style,
  title, description, currency, value, type,
  ...props
}) => (
  <View style={[styles.rootContainer, style]}>
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{currency}</Text>
      <Text>{value}</Text>
      <Text>{type}</Text>
    </View>
  </View>
)

export default CardBlock