import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../Themes'

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection:'row',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  infoContainer: {
    flex: 0.8,
  },
  titleContainer: {

  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
   
  },
  buttonText: {
    fontSize: 14,
  }
})

export default styles
