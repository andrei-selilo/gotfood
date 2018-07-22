//import PropTypes from 'prop-types';
import React from 'react';
import { View, ScrollView, Text, TextInput, Image } from 'react-native';
import styles from './styles';
import BaseView from '../../Components/BaseView'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton';
import FullButton from '../../Components/FullButton';
import DrawerButton from '../../Components/DrawerButton';
import Block from '../../Components/Block';
import FullInput from '../../Components/FullInput';

const LoginScreen = ({topBlocks = [1,2,3], setSearch}) => (
    <BaseView backgroundColor={Colors.cloud}>
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <FullInput style={styles.searchInput} placeholder="Search" onChangeText={setSearch}/>
            </View>
            <View style={styles.topContainer}>
                <ScrollView horizontal={true}>{
                    topBlocks.map(() => {
                        return (
                            <Block style={styles.topBlock}>
                                <Text>Text</Text>
                            </Block>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.listHeader}>
                </View>
                <ScrollView>{
                    topBlocks.map(() => {
                        return (
                            <Block style={styles.listBlock}>
                                <Text>Text</Text>
                            </Block>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    </BaseView>
);

export default LoginScreen;