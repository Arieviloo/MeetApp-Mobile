import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import settings from '~/styles/variables';

export const Container = styled(RectButton)`
	height: 50px;
	background: ${settings.primaryColor};
	border-radius: 4px;

	align-items: center;
	justify-content: center;
`;

export const Text = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 16px;
`;
