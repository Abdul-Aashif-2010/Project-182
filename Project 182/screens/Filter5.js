import React, {Component} from 'react';
import { Image, View } from 'react-native';

const Filter5 = ({
	face: {
		bounds: {
			size: { width: FilterWidth, height: FilterHeight },
		},
		LEFT_EYE,
		RIGHT_EYE,
        NOSE_BASE,
	},
}) => {
	const FilterWidth = Width;
	const FilterHeight = FilterHeight / 3;
	const transformAngle = (
		angleRad = Math.atan((RIGHT_EYE.y - LEFT_EYE.y) / (RIGHT_EYE.x - LEFT_EYE.x))
	) => (angleRad * 180) / Math.PI;
	return (
		<View
			style={{
				position: 'absolute',
				left: LEFT_EYE.x - FilterWidth * 0.675,
				top: LEFT_EYE.y - FilterHeight * 0.5,
			}}>
			<Image
				source={require('../Filter_Assets/flower-pic2.png')}
				style={{
					width: FilterWidth,
					height: FilterHeight,
					resizeMode: 'contain',
					transform: [{ rotate: `${transformAngle()}deg` }],
				}}
			/>
		</View>
	);
};