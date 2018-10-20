import { StyleSheet } from 'react-native';
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
    }
})

export const listStyles = StyleSheet.create({
  block: {
    width: 250,
    height: 250,
  }
})

export default styles
