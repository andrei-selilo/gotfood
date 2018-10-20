import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {defaultProps} from 'recompose';
import styled from 'styled-components/native'; ///!!!!

const createStyledComponent = (styles) => defaultProps({style: styles})(Text);

export const styleSheets = StyleSheet.create({
	circle10: {
		height: 10,
		width: 10,
		borderRadius: 10/2,
	},
	circle16: {
		height: 16,
		width: 16,
		borderRadius: 16/2,
	},
	circle20: {
		height: 20,
		width: 20,
		borderRadius: 20/2,
	},
});

export const Circle10 = createStyledComponent(styleSheets.circle10);
export const Circle16 = createStyledComponent(styleSheets.circle16);
export const Circle20 = createStyledComponent(styleSheets.circle20);


// @flow
// import React, { type ComponentType} from 'react';
// import styled from 'styled-components/native';
// import {Animated, Dimensions} from 'react-native';
// import {defaultProps, type HOC} from 'recompose';
// import image from '../../../assets/images/icons/settingsIcon.png'

// type SettingsIconProps = {
// 	source?: string,
// };

// const Image = styled.Image`
// 	width: 21px;
// 	height: 21px;
// `;

// const enhancer: HOC<*, SettingsIconProps> = defaultProps({
// 	source: image,
// });

// const SettingsIcon = (props:SettingsIconProps) => <Image {...props}/>;

// export default enhancer(SettingsIcon);