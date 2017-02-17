/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../common/global.pcss';
import s from './main.pcss';

import TopBar from '../../components/TopBar/TopBar';
import Container from '../../components/Container/Container';
import Form from '../Form/Form';
import Summary from '../../components/Summary/Summary';

class Main extends Component {
    render() {
        const { basket } = this.props;

        return (
            <div>
                <TopBar itemsQuantity={basket.items.length}/>
                <Container>
                    <div className={s.wrapper}>
                        <div className={s.main}>
                            <Form/>
                            <Summary basket={basket}/>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default connect(state => ({
    basket: state.basket
}))(Main)