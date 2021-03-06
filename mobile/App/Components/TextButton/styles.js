import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes'

const styles = StyleSheet.create({
    block: {
        width: 180,
        height: 180,
        marginHorizontal: Metrics.marginHorizontal - 5,
        marginVertical: 0,
    },
    title: {
        margin: Metrics.smallMargin,
        marginRight: Metrics.marginHorizontal
    },
    onFocus: {
        color: Colors.panther
    }
});

export default styles;
