import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  rootContainer: {
    width: 250,
    height: 150,
    borderRadius: Metrics.buttonRadius,
    padding: Metrics.basePadding,
    backgroundColor: Colors.silver
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  currencyContainer: {
    position: 'absolute',
    right: 5,
  },
  currencyText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  codeContainer: {
    position: 'absolute',
    bottom: 50,
  },
  codeText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  typeContainer: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  dateContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row'
  },
  dateBlock: {
    backgroundColor: Colors.snow,
    width: 40,
    height: 15,
    borderRadius: 10,
    marginRight: 5,
  }
})

export default styles
