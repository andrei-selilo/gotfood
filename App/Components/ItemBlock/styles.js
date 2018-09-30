import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    width: 250,
    height: 250,
    borderRadius: Metrics.buttonRadius,
    backgroundColor: Colors.snow
  },
  headerContainer: {
    flex: 0.2,
    padding: Metrics.basePadding,
    paddingBottom: Metrics.basePadding + 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.silver,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24
  },
  descriptionText: {
    fontSize: 16
  },
  contentContainer: {
    flex: 0.8,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center'
  },
  likeContainer: {
    position: 'absolute',
    top: Metrics.basePadding,
    right: Metrics.basePadding,
    width: 30,
    height: 30,
    borderRadius: 30/2,
    backgroundColor: Colors.bloodOrange
  }
})

export default styles
