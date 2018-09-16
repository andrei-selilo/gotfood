import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes'
import metrics from '../../Themes/Metrics';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.snow,
  },
  circle: {
		height: 40,
		width: 40,
		borderRadius: 40/2,
	}
});

export default styles;
