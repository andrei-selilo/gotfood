import * as React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ListBlockItem from './ListBlockItem'
import styles from './styles'
import Colors from '../../Themes/Colors'

const ItemBlock = ({
  key, items, loading, 
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
      <ScrollView style={styles.contentContainer}>
        { items && items.map((row) => {
          return (<ListBlockItem title={row.title} description={row.description} onPress={row.onPress}/>)
        })
        }
      </ScrollView>
    </View>
  )

export default ItemBlock