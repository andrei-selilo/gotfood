import * as React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Colors, Metrics, Fonts } from '../../Themes'
import { Block, TextButton, CardBlock } from '../../Components'

// Types: none, radio, check, maximize

export const HorizontalListType = {
  RADIO: 'radio',
  CHECK: 'check',
}

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
      <ScrollView horizontal={true} style={styles.blockContainer} contentContainerStyle={styles.blockContainerContent}>
        {getElementBlocks({ listType, elements, blocksSelected, titleFocused, onPress: onElementClick, addable, style })}
      </ScrollView>
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

    let CustomTag = [HorizontalListType.RADIO, HorizontalListType.CHECK].includes(listType) ? TouchableOpacity : View

    const blocks = elements[row].map((block, index) => {
      let marker
      let style = [styles.block]
      const elementId = `${row}-block-${index}`

      if (blocksSelected.includes(elementId)) {
        // marker = getMarker(listType)
        style.push(styles.blockSelected)
      }
      return (<CustomTag key={elementId} onPress={() => onPress(elementId)} style={style}>{block}{marker}</CustomTag>)
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
    case HorizontalListType.CHECK:
      out = styles.checkMarker
      break;
    case HorizontalListType.RADIO:
      style = styles.radioMarker
      break;
  }
  return (<View style={style} />)
}

export default HorizontalList