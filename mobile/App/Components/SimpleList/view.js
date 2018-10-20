import * as React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Colors, Metrics, Fonts } from '../../Themes'
import { Block, TextButton, CardBlock } from '../../Components'

const SimpleList = ({ elements, title, key, ...props }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.titleContainer}>
      <Text style={styles.titleTextContainer}>{title}</Text>
      <View style={styles.titleMinimizeButton}/>
    </TouchableOpacity>
    {renderElements(elements, key)}
  </View>
)

const renderElements = function (elements, key = 0) {
  return elements.map((row, index) => {
    return (
      <ScrollView style={styles.itemContainer} contentContainerStyle={styles.itemContainerContent} key={`simplelist-${key}-element-${index}`}>
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