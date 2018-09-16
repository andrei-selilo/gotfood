import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Colors, Metrics, Fonts } from '../../Themes'
import { FullInput } from '../../Components'

const SearchBar = ({ style, onChangeText }) => (
  <View style={[styles.container, style]}>
      <FullInput style={styles.input} placeholder="Search" onChangeText={onChangeText} />
  </View>
);

export default SearchBar;