import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  rootContainer: {
    width: 250,
    height: 250,
    marginHorizontal: Metrics.marginHorizontal,
    marginVertical: Metrics.marginVertical,
    borderRadius: Metrics.buttonRadius,
    padding: Metrics.basePadding,
    // alignItems: 'center',
    backgroundColor: Colors.snow
  },
  container: {
  },
})

export default styles
