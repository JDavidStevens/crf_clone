import React, { Component } from 'react';
import './nm.css';


export default class NavbarMid extends Component {

    render() {
        return (
            <div className='nm'>
                <ul className='nm-ul'>
                <div className='gallery-link'>
                    <li className='nm-li'><a className='gallery-a' href='#gallery'>GALLERY</a></li>
                    <hr></hr>
                </div>
                <div className='gallery-link'>
                    <li className='nm-li'><a className='models-a' href='#models'> MODELS</a></li>
                    <hr></hr>
                </div>
                    <div className='gallery-link'>
                    <li className='nm-li'><a className='events-a' href='#upcoming-events'>UPCOMING EVENTS</a></li>
                    <hr className='hr-long'></hr>
                </div>
                </ul>
            </div>
        )
    }
}