import * as React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Colors from '../../Themes/Colors'

const ListBlock = ({
  children, loading, header, style
}) => (
  <View style={[styles.rootContainer, style]}>
    <View style={styles.container}>
      {children}
    </View>
  </View>
)

export default ListBlock