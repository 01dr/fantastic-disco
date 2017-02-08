/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

import React, { PropTypes } from 'react';
import s from './item.pcss';

const Item = props => (
    <div className={s.item}>
        <div className={s.image}>
            <img src={props.image}/>
        </div>
        <div className={s.info}>
            <div className={s.name}>{props.name}</div>
            <div>{props.description}</div>
            <div>Quantity: {props.quantity}</div>
        </div>
        <div className={s.price}>{`$${props.price}`}</div>
    </div>
);

Item.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string
}

export default Item;