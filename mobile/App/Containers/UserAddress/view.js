import PropTypes from 'prop-types';
import React from 'react';
import UserAddressComponent from '../../../components/UserAddress';
import styles from './styles';

const UserAddress = ({onNext}) => (
    <UserAddressComponent header={'Home Address'} onButtonPress={onNext}/>
);

export default UserAddress;