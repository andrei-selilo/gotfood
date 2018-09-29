import * as React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Colors, Metrics, Fonts } from '../../Themes'
import { Block, TextButton, CardBlock } from '../../Components'

// Types: none, radio, check, maximize

const HorizontalList = ({
  style = {}, elements = {}, children,
  listType, addable,
  blocksSelected,
  onTitleClick, onElementClick,
  titleFocused, setTitleFocused
}) => (
    <View>
      <ScrollView horizontal={true} style={styles.titleContainer} contentContainerStyle={styles.titleContainerContent}>
        {getElementTitles({ elements, titleFocused, onTitleClick, style })}
      </ScrollView>
      <View>
        <ScrollView horizontal={true} style={styles.blockContainer} contentContainerStyle={styles.blockContainerContent}>
          {getElementBlocks({ listType, elements, blocksSelected, titleFocused, onPress: onElementClick, addable, style })}
        </ScrollView>
      </View>
    </View>
  )

const getElementTitles = function ({ elements, titleFocused, onTitleClick, style = {} }) {
  return Object.keys(elements).map((row, index) => {
    let focus = row === titleFocused ? true : false
    return (
      <TextButton
        key={`${row}-title-${index}`}
        style={[styles.title, style.title]}
        textStyle={[styles.titleText, style.titleText]}
        title={row}
        onPress={() => { onTitleClick(row) }}
        focus={focus}
      />
    )
  })
}

const getElementBlocks = function ({ elements, blocksSelected, listType, titleFocused, onPress, addable = false, style = {} }) {
  return Object.keys(elements).map((row) => {
    if (row !== titleFocused) {
      return
    }
    const blocks = elements[row].map((block, index) => {
      let marker
      const elementId = `${row}-block-${index}`
      if (blocksSelected.includes(elementId)) {
        marker = getMarker(listType)
      }
      return (<TouchableOpacity key={elementId} onPress={() => onPress(elementId)}>{block}{marker}</TouchableOpacity>)
    })
    if (addable) {
      blocks.push(<TouchableOpacity style={[styles.addBlockContainer]} />)
    }

    return blocks
  })
}

const getMarker = function (listType) {
  return (<View style={styles.radioMarker} />)
}

export default HorizontalList