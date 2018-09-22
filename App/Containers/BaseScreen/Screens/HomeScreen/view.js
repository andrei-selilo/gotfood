//import PropTypes from 'prop-types';
import React from 'react'
import { View, ScrollView, Text, TextInput, Image } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../../../Themes'
import { BaseView, RoundedButton, FullButton, DrawerButton, Block, ListBlock, ItemBlock, FullInput, ProfileIcon, HorizontalList, SearchBar } from '../../../../Components'
import { styles, listStyles } from './styles'

const HomeScreen = ({ topBlocks = [1, 2, 3], setSearch, onProfileClick,
  trendingElements = { 
    Breakfast: [
      <ListBlock title={`McDonalds`} description={`Breakfast`} list={''} horizontal={false} />, 
      <ItemBlock title={`Salmon via Pari`} description={`Gran Bellagio`} content={''} />, 
      <ListBlock />
    ] 
  },
  categoryElements = { 
    Favourite: [<ItemBlock title={`Salmon via Pari`} description={`Gran Bellagio`} content={''} />], 
    Events: [<ListBlock />, <ItemBlock />], 
    Healthy: [<ItemBlock />, <ListBlock />, <ItemBlock />] 
  }
}) => (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <SearchBar onChangeText={setSearch} />
          <ProfileIcon onClick={onProfileClick} />
        </View>
        <HorizontalList key={'trending'} style={listStyles} elements={trendingElements} />
        <HorizontalList key={'categories'} style={listStyles} elements={categoryElements} />
      </View>
    </View>
  );

export default HomeScreen