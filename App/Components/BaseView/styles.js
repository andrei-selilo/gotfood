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
        justifyContent: 'flex-start',
        marginHorizontal: Metrics.marginHorizontal,
    },
});

export default styles;
