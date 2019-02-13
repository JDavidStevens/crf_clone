import React, { Component } from 'react';
import './base.css';


export default class BaseMenu extends Component {

    render() {
        return (
            <div className='base'>
            <div className='base-grid'>
                <div className='base1'></div>
                <div className='base2'>
                    <ul className='base-ul'>
                        <li className='base-li'>ABOUT POWERSPORTS</li>
                        <li className='base-li'>Honda SERVICES</li>
                        <li className='base-li'>RECALL INFORMATION</li>
                    </ul>
                </div>
                <div className='base3'>
                    <ul className='base-ul'>
                        <li className='base-li'>MANUALS</li>
                        <li className='base-li'>TERMS OF USE</li>
                        <li className='base-li'>SUPPORT</li>
                    </ul>
                    </div>
                <div className='base4'>
                    <ul className='base-ul'>
                        <div className='base-ul2'> 
                        <li className='base-li'>PRIVACY POLICY</li>
                        </div>
                        <div>
                        <li className='base-li'>BECOME A DEALER</li>
                        </div>
                    </ul>
                </div>
                <div className='base5'>
                    <ul className='base-ul'>
                        <li className='base-li'>Honda.COM</li>
                        <li className='base-li'>ADCHOICES</li>
                        <li className='base-li'>SITE MAP</li>
                    </ul>
                </div>
                <div className='base6'></div>
                <div className='base7'>
                <div className='base7-content'>
                    <img className='base7-pindrop' src="https://powersports.honda.com/images/Adventure/icons/pin-red.png" alt="pindrop" />
                    <h3 className='base7-h3'>FIND A DEALER</h3>
                    <input className='base7-input' placeholder="ENTER ZIP CODE" />
                    <i className='arrow'></i>
                </div>
                </div>
                <div className='base8'>
                    <h3 className='base8-h3'>JOIN THE CONVERSATION</h3>
                    <img className='base8-icons' src='https://powersports.honda.com/images/Adventure/icons/social-icons.png' alt=''/>
                </div>
                </div>
            </div>
        )
    }
}