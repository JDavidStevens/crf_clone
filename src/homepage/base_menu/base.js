import React, { Component } from 'react';
import './base.css';
import Media from 'react-media';


export default class BaseMenu extends Component {

    render() {
        return (
            <div className='base'>
                <Media query='(max-width: 799px)'
                    render={() =>
                        <div className='base-grid'>
                            <div className='top-base-grid'>
                                <p className='footer-links'>ABOUT POWERSPORTS</p>
                                <p className='footer-links'>MANUALS</p>
                                <p className='footer-links'>Honda SERVICES</p>
                                <p className='footer-links'>TERMS OF USE</p>
                            </div>
                            <div className='lower-base-grid'>
                                <p className='footer-links2 recall'>RECALL INFORMATION</p>
                                <p className='footer-links2 support'>SUPPORT</p>
                                <p className='footer-links2 policy'>PRIVACY POLICY</p>
                                <p className='footer-links2 dotcom'>Honda.COM</p>
                                <p className='footer-links2 dealer'>BECOME A DEALER</p>
                                <p className='footer-links2 ads'>ADCHOICES</p>
                                <p className='footer-links2 map'>SITE MAP</p>
                            </div>
                            <div>
                                <div className='mobile-find-dealer-wrapper'>
                                    <img className='mobile-pindrop' src="https://powersports.honda.com/images/Adventure/icons/pin-red.png" alt="pindrop" />
                                    <h3 className='mobile-dealer-h3'>FIND A DEALER</h3>
                                </div>
                                <div className='mobile-arrow-input'>
                                    <input className='mobile-input' placeholder="ENTER ZIP CODE" />
                                    <i className='base-i mobile-arrow'></i>
                                </div>
                            </div>
                            <div className='mobile-social-wrapper '>
                                <h3 className='mobile-social-h3'>JOIN THE CONVERSATION</h3>
                                <img className='mobile-icons' src='https://powersports.honda.com/images/Adventure/icons/social-icons.png' alt='' />
                            </div>
                            <div className='page-end-mobile'>
                            <p className='base-disclaimer-mobile'>This site is for educational purposes only. It is not an offer to sell the products found herein.</p>
                        </div>
                        </div>
                    } />
                <Media
                    query="(min-width: 800px)"
                    render={() =>
                        <div>
                            <div className='base-grid'>
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
                                <div className='base7'>
                                    <div className='base7-content'>
                                        <img className='base7-pindrop' src="https://powersports.honda.com/images/Adventure/icons/pin-red.png" alt="pindrop" />
                                        <h3 className='base7-h3'>FIND A DEALER</h3>
                                        <input className='base7-input' placeholder="ENTER ZIP CODE" />
                                        <i className='base-i arrow'></i>
                                    </div>
                                </div>
                                <div className='base8'>
                                    <h3 className='base8-h3'>JOIN THE CONVERSATION</h3>
                                    <img className='base8-icons' src='https://powersports.honda.com/images/Adventure/icons/social-icons.png' alt='' />
                                </div>
                            </div>
                                <p className='base-disclaimer'>This site is for educational purposes only. It is not an offer to sell the products found herein.</p>
                            </div>
                    } />
            </div>
        )
    }
}