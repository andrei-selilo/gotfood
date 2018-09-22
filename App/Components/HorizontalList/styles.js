import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
    block: {
      width: 100,
      height: 100,
      marginHorizontal: Metrics.marginHorizontal - 5,
      marginVertical: 0,
    },
    title: {
      margin: Metrics.smallMargin,
      marginHorizontal: Metrics.baseMargin,
    },
    titleText: {
      color: Colors.steel,
    }
})

export default styles
