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
        borderBottomWidth: 1,
        borderBottomColor: Colors.ember,
    },
    container: {
        fontSize: 20
    },
});

export default styles;
