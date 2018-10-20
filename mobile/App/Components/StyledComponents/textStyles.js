import colors from './colors'
import {Text, StyleSheet} from 'react-native';
import {defaultProps} from 'recompose'

const createStyledComponent = (styles) => defaultProps({style: styles})(Text);

export const textStyles = StyleSheet.create({
	sfd40Green: {
		fontSize: 40,
		fontWeight: "100",
		letterSpacing: 1.6,
		textAlign: "left",
		color: colors.green
	}
});

export const SFD40Green = createStyledComponent(textStyles.sfd40Green);