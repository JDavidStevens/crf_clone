import React, { Component } from 'react';
import './nm.css';


export default class NavbarMid extends Component {

    render() {
        return (
            <div className='nm'>
                <ul className='nm-ul'>
                    <li className='nm-li'>GALLERY</li>
                    <li className='nm-li'>MODELS</li>
                    <li className='nm-li'>UPCOMING EVENTS</li>
                </ul>
            </div>
        )
    }
}