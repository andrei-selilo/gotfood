//import PropTypes from 'prop-types';
import React from 'react'
import { View, ScrollView, Text, TextInput, Image } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../../../Themes'
import { BaseView, RoundedButton, FullButton, DrawerButton, Block, FullInput, ProfileIcon, HorizontalList, SimpleList, SearchBar, CardBlock } from '../../../../Components'
import { styles, cardListStyles } from './styles'

const ProfileScreen = ({
  statsListElements = [{ title: 'One', description: 'despacito' }, { title: 'Two', description: 'despacito' }, { title: 'Three', description: 'despacito' }],
  historyListElements = [{ title: 'One', description: 'despacito' }, { title: 'Two', description: 'despacito' }, { title: 'Three', description: 'despacito' }],
}) => (
    <View header={true} footerMenu={true}>
      <View style={styles.container}>
        <Block>
          <SimpleList elements={statsListElements} title={"Stats"} />
        </Block>
        <Block>
          <SimpleList elements={historyListElements} title={"History"} />
        </Block>
      </View>
    </View>
  );

export default ProfileScreen