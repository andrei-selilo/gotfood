import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export const styles = StyleSheet.create({
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

export const stylesOpenBlock = StyleSheet.create({
  rootContainer: {
    width: 250,
    height: 250,
    borderRadius: Metrics.borderRadius,
    borderWidth: 1,
    borderColor: Colors.ember,
    backgroundColor: Colors.snow,
    zIndex: 2,
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
