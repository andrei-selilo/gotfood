import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: 75,
      backgroundColor: Colors.snow,
    },
    menuItem: {
      margin: Metrics.baseMargin
    }
});

export default styles;
