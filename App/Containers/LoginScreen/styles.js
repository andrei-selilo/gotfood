import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    input: {
        width: 250,
    },
    logoContainer: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        width: 110,
        resizeMode: 'contain',
    },
    loginBlock: {
        shadowColor: Colors.panther,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: Colors.charcoal
    },
    bottomSection: {
        alignItems: 'center',
    }
});

export default styles;
