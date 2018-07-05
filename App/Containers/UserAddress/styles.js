import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    flex: {
        flex: 1,
    },
    title: {
        color: 'green',
        fontSize: 20,
    },
    textInputContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        paddingHorizontal: 12,
        borderBottomWidth: 0,
    },
    textInput: {
        marginLeft: 0,
        backgroundColor: 'transparent',
        marginRight: 0,
        height: 38,
        color: '#5d5d5d',
        fontSize: 16,
        borderBottomWidth: 2,
    },
    labelContainer: {
        flexDirection: 'row',
        marginHorizontal: 12,
        marginVertical: 20,
    },
    labelIcon: {
        marginRight: 12
    },
    label: {
        fontSize: 20
    },
    autoComplete: {
        marginTop: 20,
    },
    arrowBackContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    backLabel: {
        fontSize: 18,
        paddingLeft: 8,
    },
    supportMessage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ffffffb0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    mainSupportText: {
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 16,
    },
    button: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
    },
    additionalText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 12,
        textAlign: 'center',
    },
    addressText: {
        fontSize: 26,
        textAlign: 'center',
    },
    mapFooter: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    secondarySupportText: {
        fontSize: 20,
        textAlign: 'center',
    },
    completeContainer: {
        flex: null,
    },
});

export default styles;
