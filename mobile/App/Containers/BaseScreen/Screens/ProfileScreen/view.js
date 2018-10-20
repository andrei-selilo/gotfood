//import PropTypes from 'prop-types';
import React from 'react'
import { View, ScrollView, Text, TextInput, Image } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../../../Themes'
import { BaseView, RoundedButton, FullButton, DrawerButton, Block, FullInput, ProfileIcon, HorizontalList, SimpleList, SearchBar, CardBlock } from '../../../../Components'
import { styles, cardListStyles } from './styles'

const ProfileScreen = ({
  statsListElements = [{ title: 'Points', description: '73' }, { title: 'Spent', description: '109.44$' }],
  historyListElements = [{ title: `Carl's Jr`, description: '14.43$' }, { title: `McDonald's`, description: '7.54$' }, { title: 'Soletto', description: '1.32$' }],
}) => (
    <View header={true} footerMenu={true}>
      <View style={styles.container}>
        <Block>
          <SimpleList elements={statsListElements} title={"Stats"} key={1}/>
        </Block>
        <Block>
          <SimpleList elements={historyListElements} title={"History"} key={2}/>
        </Block>
      </View>
    </View>
  );

export default ProfileScreen