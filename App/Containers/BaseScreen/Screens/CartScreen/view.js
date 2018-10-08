//import PropTypes from 'prop-types';
import React from 'react';
import { View, ScrollView, Text, TextInput, Image } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles, Images } from '../../../../Themes'
import { BaseView, RoundedButton, FullButton, SimpleList, Block, HorizontalList, CardBlock } from '../../../../Components'
import { styles, cardListStyles } from './styles'

const CartScreen = ({
  cartListElements = [
    { title: 'One', description: 'despacito' }, 
    { title: 'Two', description: 'despacito' }, 
    { title: 'Three', description: 'despacito' },
    { title: 'TOTAL', description: '10.99$' }
  ],
  paymentListElements = {
    CreditCard: [
      <CardBlock title={'Card1'} currency={'USD'} code={"XXXX XXXX XXXX 4192"} type={'VISA'} />,
      <CardBlock title={'Card2'} currency={'USD'} code={"XXXX XXXX XXXX 3312"} type={'MASTERCARD'} />,
    ],
    Crypto: [<Text>Bitcoin</Text>, <Text>Litecoin</Text>],
    Other: [<Text>PayPal</Text>]
  }
}) => (
    <View>
      <Block>
        <SimpleList elements={cartListElements} title={"List"} />
      </Block>
      <Block>
        <View style={[styles.blockTitleContainer]}>
          <Text style={[styles.blockTitleText]}>Payment</Text>
        </View>
        <HorizontalList elements={paymentListElements} style={cardListStyles} listType={"radio"} addable={true} />
      </Block>
    </View>
  )

export default CartScreen