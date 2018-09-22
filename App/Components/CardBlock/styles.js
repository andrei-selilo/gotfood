import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  rootContainer: {
    width: 250,
    height: 150,
    marginHorizontal: Metrics.marginHorizontal,
    marginVertical: Metrics.marginVertical,
    borderRadius: Metrics.buttonRadius,
    padding: Metrics.basePadding,
    backgroundColor: Colors.charcoal
  },
  container: {
  },
})

export default styles
