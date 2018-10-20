import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 0.95,
    },
    input: {
        marginBottom: Metrics.baseMargin,
        marginHorizontal: Metrics.marginHorizontal,
        flex: 1,
    },
});

export default styles;
