//import PropTypes from 'prop-types';
import React from 'react'
import { View, ScrollView, Text, TextInput, Image } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../../../Themes'
import { BaseView, RoundedButton, FullButton, DrawerButton, Block, FullInput, ProfileIcon, HorizontalList, SearchBar } from '../../../../Components'
import styles from './styles';

const HomeScreen = ({ topBlocks = [1, 2, 3], setSearch, onProfileClick,
  trendingElements = { Breakfast: [1, 2, 3] },
  categoryElements = { Favourite: [1], Events: [1, 2], Healthy: [1, 2, 3, 4] }
}) => (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <SearchBar onChangeText={setSearch} />
          <ProfileIcon onClick={onProfileClick} />
        </View>
        <HorizontalList key={'trending'} style={styles.horizontalList} elements={trendingElements} />
        <HorizontalList key={'categories'} style={styles.horizontalList} elements={categoryElements} />
      </View>
    </View>
  );

export default HomeScreen