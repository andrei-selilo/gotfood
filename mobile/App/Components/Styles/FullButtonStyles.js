import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.bloodOrange,
    borderBottomColor: Colors.fire,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.bloodOrange
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
