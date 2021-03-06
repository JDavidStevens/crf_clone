import React, { Component } from 'react';
import './homepage.css';

import Intro from './intro/intro';
import NavbarTop from './navbar_top/nt';
import Video from './video/video';
import NavbarMid from './navbar_mid/nm';
import Lineup from './lineup/lineup';
import Models from './models/models';
import Events from './events/events';
import Connected from './connected/connected';
import BaseMenu from './base_menu/base';

export default class Homepage extends Component {

    render() {
        return (
            <div id='home'>
                <Intro/>
                <NavbarTop />
                <Video/>
                <div className='hp-nbm'>
                <NavbarMid/>
                </div>
                <div>
                <Lineup/>
                <Models />
                <Events/>
                <Connected/>
                <BaseMenu/>
                </div>
            </div>
        )
    }
}