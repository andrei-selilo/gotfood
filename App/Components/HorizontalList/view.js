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
      let style = [styles.block]
      const elementId = `${row}-block-${index}`
      if (blocksSelected.includes(elementId)) {
        // marker = getMarker(listType)
        style.push(styles.blockSelected)
      }
      return (<TouchableOpacity key={elementId} onPress={() => onPress(elementId)} style={style}>{block}{marker}</TouchableOpacity>)
    })
    if (addable) {
      blocks.push(<TouchableOpacity style={[styles.addBlockContainer]} />)
    }

    return blocks
  })
}

const getMarker = function (listType) {
  let style
  switch (listType) {
    case 'check':
      out = styles.checkMarker
      break;
    case 'radio':
      style = styles.radioMarker
      break;
  }
  return (<View style={style} />)
}

export default HorizontalList