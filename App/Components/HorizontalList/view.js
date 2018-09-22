import * as React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Colors, Metrics, Fonts } from '../../Themes'
import { Block, TextButton } from '../../Components'

const HorizontalList = ({ style = {}, elements = {}, children, onElementClick, titleFocused, setTitleFocused }) => (
  <View>
    <ScrollView horizontal={true}>
      {
        Object.keys(elements).map((row, index) => {
          let focus = row === titleFocused ? true : false
          return (
            <TextButton 
              key={`${row}-title-${index}`} 
              style={[styles.title, style.title]} 
              textStyle={[styles.titleText, style.titleText]} 
              title={row} 
              onPress={async () => { setTitleFocused(row) }}
              focus={focus}
            />
          )
        })
      }
    </ScrollView>
    <View>
      <ScrollView horizontal={true}>{
        Object.keys(elements).map((row) => {
          if (row !== titleFocused) {
            return
          }
          return elements[row].map((block, index ) => {
            return (
              <TouchableOpacity key={`${row}-block-${index}`} onPress={onElementClick}>
                {block}
              </TouchableOpacity>
            )
          })
        })}
      </ScrollView>
    </View>
  </View>
);

export default HorizontalList;