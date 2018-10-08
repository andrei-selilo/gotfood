import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../../Themes'

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    row: {
      marginTop: 10, 
      flexDirection: 'row'
    },
    blockTitleContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    blockTitleText: {
      fontSize: 24,
      fontWeight: 'bold'
    },
})

export const cardListStyles  = StyleSheet.create({
  title: {

  },
  titleText: {
    fontSize: 18
  },
  block: {
    width: 250,
    height: 150,
    backgroundColor: Colors.cloud
  }
})

export default styles
