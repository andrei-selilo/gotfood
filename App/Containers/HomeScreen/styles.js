import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    searchContainer: {
        marginTop: 10,
    },
    topContainer: {
    },
    topBlock: {
        width: 180,
        height: 180,
        marginHorizontal: Metrics.marginHorizontal - 5,
        marginVertical: 0,
    },
    listContainer: {
        flex: 1,
        marginTop: Metrics.baseMargin
    },
    listHeader: {
        height: 50,
        backgroundColor: Colors.snow,
        marginBottom: Metrics.baseMargin
    },
    listBlock: {
        marginHorizontal: Metrics.marginHorizontal - 5,
        marginVertical: Metrics.marginVertical - 5,
        backgroundColor: Colors.silver
    }
});

export default styles;
