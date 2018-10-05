import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles, stylesOpenBlock } from './styles'
import Colors from '../../Themes/Colors'

const ItemBlock = ({
  key, children, loading,
  style, title, description,
  isOpened,
  _styles = styles, // isOpened ? stylesOpenBlock : styles,
  onPress,
  onLikePress = function () { }
}) => (
    <TouchableOpacity style={[_styles.rootContainer, style]} onPress={onPress}>
      <View style={_styles.headerContainer}>
        <View style={_styles.titleContainer}>
          <Text style={_styles.titleText}>{title}</Text>
        </View>
        <View style={_styles.descriptionContainer}>
          <Text style={_styles.descriptionText}>{description}</Text>
        </View>
        {
          onLikePress && (
            <TouchableOpacity style={_styles.likeContainer} onPress={() => onLikePress(key)} />
          )
        }
      </View>
      <View style={_styles.contentContainer}>
        {children}
      </View>
    </TouchableOpacity>
  )

export default ItemBlock