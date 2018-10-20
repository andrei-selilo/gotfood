//import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './styles';
import BaseView from '../../Components/BaseView'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton';
import FullButton from '../../Components/FullButton';
import DrawerButton from '../../Components/DrawerButton';
import Block from '../../Components/Block';
import LineInput from '../../Components/LineInput';

const LoginScreen = ({onLogin, onSignUp, setLogin, setPassword}) => (
    <BaseView backgroundColor={Colors.cloud}>
        <View style={styles.container}>
        </View>
    </BaseView>
);

export default LoginScreen;