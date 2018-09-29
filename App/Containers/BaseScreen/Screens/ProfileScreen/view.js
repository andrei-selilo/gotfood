//import PropTypes from 'prop-types';
import React from 'react'
import { View, ScrollView, Text, TextInput, Image } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../../../Themes'
import { BaseView, RoundedButton, FullButton, DrawerButton, Block, FullInput, ProfileIcon, HorizontalList, SearchBar, CardBlock } from '../../../../Components'
import { styles, cardListStyles } from './styles'

const ProfileScreen = ({
  paymentListElements = {
    CreditCard: [
      <CardBlock title={'Card1'} currency={'USD'} value={2200} type={'VISA'}/>, 
      <CardBlock title={'Card2'} currency={'USD'} value={2200} type={'VISA'}/>,
    ],
    Crypto: [<Text>Bitcoin</Text>, <Text>Litecoin</Text>],
    Other: [<Text>PayPal</Text>]
  }
}) => (
    <View header={true} footerMenu={true}>
      <View style={styles.container}>
        <Block>
          <View style={[styles.blockTitleContainer]}>
            <Text style={[styles.blockTitleText]}>Payment</Text>
          </View>
          <HorizontalList elements={paymentListElements} style={cardListStyles} listType={"radio"} addable={true}/>
        </Block>
      </View>
    </View>
  );

export default ProfileScreen