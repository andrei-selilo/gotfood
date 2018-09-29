import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
  title: {
    margin: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  titleText: {
    color: Colors.steel,
  },
  blockContainer: {
    flex: 0,
  },
  blockContainerContent: {
    flexGrow: 1
  },
  block: {
    width: 100,
    height: 100,
    marginHorizontal: Metrics.marginHorizontal - 5,
    marginVertical: 0,
  },
  addBlockContainer: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    marginTop: Metrics.marginHorizontal,
    backgroundColor: Colors.bloodOrange,
  },
  radioMarker: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    backgroundColor: Colors.bloodOrange,
    position: 'absolute',
    bottom: 25,
    right: 25,
  }
})

export default styles
