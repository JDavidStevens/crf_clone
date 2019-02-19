import React, {Component} from 'react';
import './nt.css';
import logo from '../../assets/CRF Performance Line - Honda Powersports_files/honda-logo.png';


export default class NavbarTop extends Component{

    render(){
return(
    <div className='top-nav'>
        <div className='nt-logo'>
            <img className='nt-img' src={logo} alt="Honda"/>
        </div>
        <div className="nt-menu">
        <ul>
            <li><a href='#home'>HOME</a></li>
            <li><a href='#models'>MODELS</a></li>
            <li><a href='#upcoming-events' >CURRENT OFFERS</a></li>
            <li><a href="#stay-connected">STAY CONNECTED</a></li>
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