/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

import React from 'react';
import s from './topBar.pcss';

import Container from '../Container/Container';

import logo from '../../images/logo.png';
import cartIcon from '../../images/icons/cart.png';

const TopBar = () => (
    <div className={s.topBar}>
        <Container>
            <div className={s.inner}>
                <div className={s.logo}><img src={logo}/></div>
                <div className={s.name}>Amazing Frontend Shop</div>
                <div className={s.cart}>
                    <a>Cart <img src={cartIcon}/></a>
                </div>
            </div>
        </Container>
    </div>
);

export default TopBar;