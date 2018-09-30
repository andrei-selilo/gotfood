import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Colors from '../../Themes/Colors'

const ItemBlock = ({
  key, children, loading, 
  style, title, description, 
  onLikePress = function() {}
}) => (
    <View style={[styles.rootContainer, style]}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        {
          onLikePress && (
            <TouchableOpacity style={styles.likeContainer} onPress={() => onLikePress(key)}/>
          )
        }
      </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </View>
  )

export default ItemBlock