import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextButton, FullButton } from '../../../Components'
import styles from './styles'
import Colors from '../../../Themes/Colors'

const ListBlockItem = ({
  key,
  style,
  title, description,
  onPress,
}) => (
    <View style={[styles.rootContainer, style]}>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
      {onPress &&
        <View style={styles.buttonContainer}>
          <TextButton title={'GET'} style={styles.button} textStyle={styles.buttonText}/>
        </View>
      }
    </View>
  )

export default ListBlockItem