/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

import React, { PropTypes } from 'react';
import s from './summary.pcss';

import Item from './components/Item/Item';

const Summary = props => (
    <div className={s.summary}>
        <div className={s.title}>
            <span>Order Summary</span>
            <a className={s.edit}>edit order</a>
        </div>

        {props.basket.items.length > 1
            ? (
                <div className={s.body}>
                    {props.basket.items.map((item, i) => <Item
                        key={i}
                        name={item.name}
                        description={item.description}
                        quantity={item.quantity}
                        price={item.price}
                        image={item.image} />)}

                    <div className={s.subtotal}>
                        <div className={s.row}>
                            <div>Subtotal</div><div>{`$${props.basket.subtotal}`}</div>
                        </div>
                        <div className={s.row}>
                            <div>Shipping</div><div>{`$${props.basket.shipping}`}</div>
                        </div>
                        <div className={s.row}>
                            <div>Taxes</div><div>{`$${props.basket.taxes}`}</div>
                        </div>
                    </div>
                    <div className={s.total}>
                        <div className={s.row}>
                            <div>Total</div><div>{`$${props.basket.total}`}</div>
                        </div>
                    </div>
                </div>
            )
            : (
                <div className={s.body}>
                    <div className={s.empty}>basket is empty</div>
                </div>
            )
        }


        <div className={s.terms}>All purchases are subject to our <a>Terms and Conditions</a></div>
    </div>
);

Summary.propTypes = {
    basket: PropTypes.object
}

export default Summary;