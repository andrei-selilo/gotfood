import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes'
import metrics from '../../Themes/Metrics';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    rootContainer: {
        padding: Metrics.basePadding,
        marginBottom: Metrics.baseMargin,
        marginHorizontal: Metrics.marginHorizontal,
        borderWidth: 1,
        borderColor: Colors.silver,
        borderRadius: 8,
        backgroundColor: Colors.snow
    },
    container: {
        fontSize: 16
    },
});

export default styles;
