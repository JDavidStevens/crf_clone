import React, {Component} from 'react';
import './nt.css';


export default class NavbarTop extends Component{

    render(){
return(
    <div className='top-nav'>
        <div className='nt-logo'>
            <img className='nt-img' src='https://powersports.honda.com/images/Adventure/honda-logo.png' alt="Honda"/>
        </div>
        <div className="nt-menu">
        <ul>
            <li>HOME</li>
            <li>MODELS</li>
            <li>CURRENT OFFERS</li>
            <li>STAY CONNECTED</li>
        </ul>
        <div className="nt-find-dealer-container">
        <img className='pin-drop' src='https://powersports.honda.com/images/Adventure/icons/pin-light.png' alt=''/>
            <span className="find-dealer">FIND DEALER</span>
        </div>
        </div>
    </div>
)
    }
}