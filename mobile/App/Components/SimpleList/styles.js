import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
    flexDirection: 'column',
    padding: Metrics.basePadding,
  },
  titleContainer: {
    marginBottom: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: Metrics.baseMargin,
  },
  titleMinimizeButton: {
    width: 10,
    height: 10,
    backgroundColor: Colors.bloodOrange,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.cloud,
    padding: Metrics.basePadding,
  },
  itemContainerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitleContainer: {
    marginRight: Metrics.baseMargin,
  },
  itemTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescriptionContainer: {

  },
  itemDescriptionText: {
    fontSize: 14,
  }


})

export default styles
