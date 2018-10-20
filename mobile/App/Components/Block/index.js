import * as React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Colors from '../../Themes/Colors'

const Block = ({
  children, loading, header, style
}) => (
  <View style={[styles.rootContainer, style]}>
    <View style={styles.container}>
      {children}
    </View>
  </View>
)

export default Block