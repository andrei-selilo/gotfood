import * as React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Colors, Metrics, Fonts } from '../../Themes'
import { Block, TextButton, CardBlock } from '../../Components'

const SimpleList = ({ elements, title, ...props }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.titleContainer}>
      <Text style={styles.titleTextContainer}>{title}</Text>
      <View style={styles.titleMinimizeButton}/>
    </TouchableOpacity>
    {renderElements(elements)}
  </View>
)

const renderElements = function (elements) {
  return elements.map((row) => {
    return (
      <ScrollView style={styles.itemContainer} contentContainerStyle={styles.itemContainerContent}>
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitleText}>{row.title}</Text>
        </View>
        <View style={styles.itemDescriptionContainer}>
          <Text style={styles.itemDescriptionText}>{row.description}</Text>
        </View>
      </ScrollView>
    )
  })
}

export default SimpleList