import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes'
import metrics from '../../Themes/Metrics';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    rootContainer: {
        padding: Metrics.baseMargin,
        borderWidth: 1,
        borderColor: Colors.silver,
        borderRadius: 12,
        backgroundColor: Colors.snow
    },
    container: {
        fontSize: 14
    },
});

export default styles;
