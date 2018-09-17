import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
    rootContainer: {
      flex: 1
    },
    container: {
      flex: 0.825,
      flexDirection: 'column',
      
      marginHorizontal: Metrics.marginHorizontal,
    },
    containerContent: {
      justifyContent: 'flex-start',
    },
    header: {
      flex: 0.050
    },
    footer: {
      position: 'absolute',
      bottom: 0,
    }
});

export default styles;
