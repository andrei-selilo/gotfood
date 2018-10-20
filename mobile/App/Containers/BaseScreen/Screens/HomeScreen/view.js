//import PropTypes from 'prop-types';
import React from 'react'
import { View, ScrollView, Text, TextInput, Image } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../../../Themes'
import { BaseView, RoundedButton, FullButton, DrawerButton, Block, ListBlock, ItemBlock, FullInput, ProfileIcon, HorizontalList, SearchBar } from '../../../../Components'
import { styles, listStyles } from './styles'

const HomeScreen = ({ topBlocks = [1, 2, 3], setSearch, onProfileClick,
  trendingElements = {
    Breakfast: [
      <ListBlock
        title={`McDonalds`}
        description={`Breakfast`}
        horizontal={false}
        items={[
          { title: 'List1', description: 'description', key: '', onPress: async () => { console.log(`buy "key"`) } },
          { title: 'List2', description: 'description', key: '', onPress: async () => { console.log(`buy "key"`) } },
          { title: 'List3', description: 'description', key: '', onPress: async () => { console.log(`buy "key"`) } },
          { title: 'List3', description: 'description', key: '', onPress: async () => { console.log(`buy "key"`) } },
          { title: 'List3', description: 'description', key: '', onPress: async () => { console.log(`buy "key"`) } },
          { title: 'List3', description: 'description', key: '', onPress: async () => { console.log(`buy "key"`) } },
          { title: 'List3', description: 'description', key: '', onPress: async () => { console.log(`buy "key"`) } },
          { title: 'List3', description: 'description', key: '', onPress: async () => { console.log(`buy "key"`) } },
        ]}
      />,
      <ItemBlock title={`Salmon via Pari`} description={`Gran Bellagio`}><Image source={require('../../../../Images/logo_colored.png')} /></ItemBlock>,
      <ListBlock />
    ]
  },
  categoryElements = {
    Favourite: [<ItemBlock title={`Salmon via Pari`} description={`Gran Bellagio`}><Image source={require('../../../../Images/logo_colored.png')} /></ItemBlock>],
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