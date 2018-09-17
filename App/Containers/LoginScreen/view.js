//import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { BaseView, RoundedButton, FullButton, DrawerButton, Block, LineInput } from '../../Components'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../Themes'
import styles from './styles';

const LoginScreen = ({onLogin, onSignUp, setLogin, setPassword}) => (
    <BaseView backgroundColor={Colors.cloud} header={true} footerMenu={false}>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} source={Images.hklogo}/>
                <Text style={Fonts.style.h2}>gotfood?</Text>
            </View>
            <Block style={styles.loginBlock}>
                <Text style={[ApplicationStyles.sectionTitle]}>Login</Text>
                <LineInput style={styles.input} placeholder="Login" onChangeText={setLogin}/>
                <LineInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={setPassword}/>
                <RoundedButton 
                    style={{backgroundColor: Colors.bloodOrange, marginTop: 35}} 
                    text="Login" 
                    onPress={onLogin}
                />
            </Block>
            <View style={styles.bottomSection}>
                <DrawerButton 
                    style={{color: Colors.panther}} 
                    text="Sign up" 
                    onPress={onSignUp}
                />
            </View>
        </View>
    </BaseView>
);

export default LoginScreen;