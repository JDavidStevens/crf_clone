import React, { Component } from 'react';
import './homepage.css';

import NavbarTop from './navbar_top/nt';
import Video from './video/video';
import NavbarMid from './navbar_mid/nm';
// import Gallery from './gallery/gallery';
import Lineup from './lineup/lineup';
import Models from './models/models';
import Trials from './trials/trials';
import Events from './events/events';
import Connected from './connected/connected';
import BaseMenu from './base_menu/base';

export default class Homepage extends Component {

    render() {
        return (
            <div>
                <NavbarTop />
                <Video/>
                <div className='hp-nbm'>
                <NavbarMid/>
                </div>
                <div>
                {/* <Gallery /> */}
                <Lineup/>
                <Models />
                <Trials/>
                <Events/>
                <Connected/>
                <BaseMenu/>
                </div>
            </div>
        )
    }
}